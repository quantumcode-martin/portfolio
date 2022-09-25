<template>
    <div class="timeline-item">
        <div :class="'timeline-content' + (timelinePosition === 'right' ? ' right' : '')">
            <p class="date">{{ experience.date }}</p>
            <h2>{{ experience.title }}</h2>
            <h3>{{ experience.short_description }}</h3>
            <p v-html="experience.description"/>
            <!-- <a href="#" class="btn">button</a> -->
        </div>
        <div class="timeline-icon">
            <i :class="'fas fa-lg fa-' + (experience.icon ? experience.icon : 'star')"></i>
          <!-- <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" width="21px" height="20px" viewBox="0 0 21 20" enable-background="new 0 0 21 20"
            xml:space="preserve">
            <path fill="#FFFFFF"
              d="M19.998,6.766l-5.759-0.544c-0.362-0.032-0.676-0.264-0.822-0.61l-2.064-4.999c-0.329-0.825-1.5-0.825-1.83,0L7.476,5.611c-0.132,0.346-0.462,0.578-0.824,0.61L0.894,6.766C0.035,6.848-0.312,7.921,0.333,8.499l4.338,3.811c0.279,0.246,0.395,0.609,0.314,0.975l-1.304,5.345c-0.199,0.842,0.708,1.534,1.468,1.089l4.801-2.822c0.313-0.181,0.695-0.181,1.006,0l4.803,2.822c0.759,0.445,1.666-0.23,1.468-1.089l-1.288-5.345c-0.081-0.365,0.035-0.729,0.313-0.975l4.34-3.811C21.219,7.921,20.855,6.848,19.998,6.766z" />
          </svg> -->
        </div>
    </div>
</template>

<script>
export default {
  props: {
    experience: {
      require: true
    },
    timelinePosition: {
      require: true
    }
  }
}
</script>

<style lang="scss" scoped>
$bg-body: #f9f9f9;

$red: #c20903;
$blue: #020202;
$primary-color: $red;
$secondary-color: $blue;

// Typography
$base-font: 'Open Sans', helvetica, arial, tahoma, verdana;
$base-font-title: 'Open Sans', arial, tahoma, verdana;

$base-font-color: #eeeeee;

// Timeline
$timeline-color: $primary-color;

// Mixins and Placeholders
%clearfix {

    &:after,
    &:before {
    content: '';
    display: block;
    width: 100%;
    clear: both;
    }
}

@mixin prefix($prop, $val) {

    @each $prefix in '-webkit-',
    '-moz-',
    '-ms-',
    '' {
    #{$prefix}#{$prop}: $val;
    }
}

*,
*:before,
*:after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
}

img {
    max-width: 100%;
}

a {
    text-decoration: none;
}

.container {
    max-width: 1250px;
    margin: 0 auto;
}

h1,
h2,
h3,
h4 {
    font: {
    family: $base-font-title;
    weight: 500;
    color: $base-font-color;
    }
}

p {
    color: $base-font-color;
    text-align: left;
}

.project-name {
    text-align: center;
    padding: 10px 0;
}

#timeline {
    width: 100%;
    margin: 30px auto;
    position: relative;
    padding: 0 10px;
    @include prefix(transition, all .4s ease);

    &:after {
    content: "";
    clear: both;
    display: table;
    width: 100%;
    }

    .timeline-item {
    margin-bottom: 50px;
    position: relative;
    @extend %clearfix;

    .timeline-icon {
        background: #232323;
        border: 2px #fff solid;
        //color: #020202;
        width: 50px;
        height: 50px;
        position: absolute;
        top: 0;
        left: 50%;
        overflow: hidden;
        margin-left: -23px;
        @include prefix(border-radius, 50%);

        transition: 0.5s all ease-in-out;

        i {
        position: relative;
        top: 14px;
        color: #fff;
        transition: 0.5s all ease-in-out;
        // left: 14px;
        }
    }

    &:before {
        content: "";
        width: 3px;
        height: 100%;
        background: $base-font-color;
        left: 50%;
        top: 50px;
        bottom: 650px;
        position: absolute;
    }

    .timeline-content {
        width: 45%;
        background: #232323c0;
        border: $base-font-color 2px solid;
        padding: 20px;
        padding-bottom: 0;
        @include prefix(box-shadow, 0 3px 0 rgba(0, 0, 0, 0.1));
        @include prefix(border-radius, 5px);
        @include prefix(transition, all .3s ease);

        h2 {
        padding: 15px;
        background: transparent;
        color: $timeline-color;
        border-bottom: 2px solid $timeline-color;
        margin: -20px -20px 0 -20px;
        font-weight: 400;
        @include prefix(border-radius, 3px 3px 0 0);
        }
        h3 {
        font-size: 1.0rem;
        padding: 0px;
        background: transparent;
        color: $timeline-color;
        margin: 0px;
        margin-right: -10px;
        font-weight: 400;
        font-style: italic;
        @include prefix(border-radius, 3px 3px 0 0);
        text-align: right;
        }

        &:hover + .timeline-icon {
            background-color: $base-font-color !important;

            i {
                color: #020202;
            }
        }

        &:before {
        content: '';
        position: absolute;
        left: 45%;
        top: 20px;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-bottom: 7px solid transparent;
        border-left: 7px solid #fff;
        z-index: -1;
        }

        .date {
        // background-color: blue;
        position: absolute;
        left: 10px;
        top: -35px;
        border: $base-font-color 2px solid;
        padding: 0px 10px;
        border-radius: 5px 5px 0px 0px;
        color: $timeline-color;
        background-color: $base-font-color;
        z-index: -1;
        font-size: 0.8rem;
        }

        &.right {
        float: right;

        .date {
            // background-color: red;
            left: auto;
            right: 10px;

        }

        &:before {
            content: '';
            right: 45%;
            left: inherit;
            border-left: 0;
            border-right: 7px solid #fff;
        }
        }
    }

    }
}

// Buttons
.btn {
    padding: 5px 15px;
    text-decoration: none;
    background: transparent;
    border: 2px solid lighten($primary-color, 10%);
    color: lighten($primary-color, 10%);
    display: inline-block;
    position: relative;
    text-transform: uppercase;
    font-size: 12px;
    @include prefix(border-radius, 5px);
    @include prefix(transition, background .3s ease);
    @include prefix(box-shadow, 2px 2px 0 lighten($primary-color, 10%));

    &:hover {
    box-shadow: none;
    top: 2px;
    left: 2px;
    @include prefix(box-shadow, 2px 2px 0 transparent);
    }
}

@media screen and (max-width: 768px) {
    #timeline {
    margin: 30px;
    padding: 0px;
    width: 90%;

    &:before {
        left: 0;
    }

    .timeline-item {
        .timeline-content {
            width: 90%;
            float: right;

            &:before,
            &.right:before {
                left: 10%;
                margin-left: -6px;
                border-left: 0;
                border-right: 7px solid $base-font-color;
            }
            }

            .date {
                left: auto !important;
                right: 10px !important;
            }

            .timeline-icon {
            left: 0;
            }
        }
    }
}
</style>
