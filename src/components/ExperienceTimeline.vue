<template>
  <!-- The Timeline -->

  <div class="container">
    <div id="timeline">

      <TimelineItem v-for="exp in experiences" :key="exp.id" :experience="exp" :timeline-position="(exp.id%2===0 ? 'right' : 'left')"></TimelineItem>

      <!-- <div class="timeline-item">
        <div class="timeline-icon">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" width="21px" height="20px" viewBox="0 0 21 20" enable-background="new 0 0 21 20"
            xml:space="preserve">
            <path fill="#FFFFFF"
              d="M19.998,6.766l-5.759-0.544c-0.362-0.032-0.676-0.264-0.822-0.61l-2.064-4.999c-0.329-0.825-1.5-0.825-1.83,0L7.476,5.611c-0.132,0.346-0.462,0.578-0.824,0.61L0.894,6.766C0.035,6.848-0.312,7.921,0.333,8.499l4.338,3.811c0.279,0.246,0.395,0.609,0.314,0.975l-1.304,5.345c-0.199,0.842,0.708,1.534,1.468,1.089l4.801-2.822c0.313-0.181,0.695-0.181,1.006,0l4.803,2.822c0.759,0.445,1.666-0.23,1.468-1.089l-1.288-5.345c-0.081-0.365,0.035-0.729,0.313-0.975l4.34-3.811C21.219,7.921,20.855,6.848,19.998,6.766z" />
          </svg>
        </div>
        <div class="timeline-content">
          <p class="date">2000-2000</p>
          <h2>LOREM IPSUM DOLOR</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
          </p>
          <a href="#" class="btn">button</a>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-icon">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px" y="0px" width="21px" height="20px" viewBox="0 0 21 20" enable-background="new 0 0 21 20"
          xml:space="preserve">
          <g>
            <path fill="#FFFFFF" d="M17.92,3.065l-1.669-2.302c-0.336-0.464-0.87-0.75-1.479-0.755C14.732,0.008,7.653,0,7.653,0v5.6
            c0,0.096-0.047,0.185-0.127,0.237c-0.081,0.052-0.181,0.06-0.268,0.02l-1.413-0.64C5.773,5.183,5.69,5.183,5.617,5.215l-1.489,0.65
            c-0.087,0.038-0.19,0.029-0.271-0.023c-0.079-0.052-0.13-0.141-0.13-0.235V0H2.191C1.655,0,1.233,0.434,1.233,0.97
            c0,0,0.025,15.952,0.031,15.993c0.084,0.509,0.379,0.962,0.811,1.242l2.334,1.528C4.671,19.905,4.974,20,5.286,20h10.307
            c1.452,0,2.634-1.189,2.634-2.64V4.007C18.227,3.666,18.12,3.339,17.92,3.065z M16.42,17.36c0,0.464-0.361,0.833-0.827,0.833H5.341
            l-1.675-1.089h10.341c0.537,0,0.953-0.44,0.953-0.979V2.039l1.459,2.027V17.36L16.42,17.36z" />
          </g>
        </svg>
      </div>
      <div class="timeline-content right">
          <p class="date">2000-2000</p>
          <h2>LOREM IPSUM DOLOR</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero
            praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
          </p>
          <a href="#" class="btn">button</a>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-icon">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" width="21px" height="20px" viewBox="0 0 21 20" enable-background="new 0 0 21 20"
            xml:space="preserve">
            <path fill="#FFFFFF" d="M19.998,6.766l-5.759-0.544c-0.362-0.032-0.676-0.264-0.822-0.61l-2.064-4.999
    c-0.329-0.825-1.5-0.825-1.83,0L7.476,5.611c-0.132,0.346-0.462,0.578-0.824,0.61L0.894,6.766C0.035,6.848-0.312,7.921,0.333,8.499
    l4.338,3.811c0.279,0.246,0.395,0.609,0.314,0.975l-1.304,5.345c-0.199,0.842,0.708,1.534,1.468,1.089l4.801-2.822
    c0.313-0.181,0.695-0.181,1.006,0l4.803,2.822c0.759,0.445,1.666-0.23,1.468-1.089l-1.288-5.345
    c-0.081-0.365,0.035-0.729,0.313-0.975l4.34-3.811C21.219,7.921,20.855,6.848,19.998,6.766z" />
          </svg>
        </div>
        <div class="timeline-content">
          <h2>LOREM IPSUM DOLOR</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, facilis quo. Maiores magnam modi ab libero
            praesentium blanditiis consequatur aspernatur accusantium maxime molestiae sunt ipsa.
          </p>
          <a href="#" class="btn">button</a>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import TimelineItem from './TimelineItem.vue'

import experiencesData from '@/assets/experiences.json'

export default {
  components: { TimelineItem },
  data () {
    return {
      experiences: experiencesData
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
$base-font: helvetica, arial, tahoma, verdana;
$base-font-title: "Dosis", arial, tahoma, verdana;

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
      background: transparent;
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

      svg {
        position: relative;
        top: 14px;
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
      @include prefix(box-shadow, 0 3px 0 rgba(0, 0, 0, 0.1));
      @include prefix(border-radius, 5px);
      @include prefix(transition, all .3s ease);

      h2 {
        padding: 15px;
        background: transparent;
        color: $timeline-color;
        border-bottom: 2px solid $timeline-color;
        margin: -20px -20px 0 -20px;
        font-weight: 300;
        @include prefix(border-radius, 3px 3px 0 0);
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
      }

      &.right {
        float: right;

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
          border-right: 7px solid $timeline-color;
        }
      }

      &:before {
        content: "";
        width: 3px;
        height: 100%;
        background: $base-font-color;
        left: 1px;
        top: 50px;
        bottom: 650px;
        position: absolute;
      }

      .timeline-icon {
        left: 0;
      }
    }
  }
}
</style>
