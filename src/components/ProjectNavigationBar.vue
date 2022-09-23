<template>
    <header :class="{'scrolled-nav': scrolledNav}">
        <nav>
            <router-link class="link no-underline" :to="{name: 'home'}">
                <div class="branding">
                    <!-- <i class="fa fa-lg fa-chevron-left"></i> -->
                    <img src="@/assets/logo.png" alt="">
                    <p v-if="!mobile" class="logo-name">/MartinHell</p>
                    <!-- <p class="logo-name">All Projects</p> -->
                </div>
            </router-link>
            <ul class="navigation">
                <a href="/#projects" class="link"><i class="fas fa-code"></i>{{ mobile?'':' All Projects' }}</a>
                <!-- <li><router-link class="link" :to="{name: ''}">All Projects</router-link></li> -->
            </ul>
            <!-- <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{ 'icon-active': mobileNav }"></i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                    <li><router-link class="link" :to="{name: ''}">Home</router-link></li>
                    <li><router-link class="link" :to="{name: ''}">About</router-link></li>
                </ul>
            </transition> -->
        </nav>
    </header>
</template>

<script>
export default {
  data () {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  created () {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    toggleMobileNav () {
      this.mobileNav = !this.mobileNav
    },
    checkScreen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
    },
    updateScroll () {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        this.scrolledNav = true
        return
      }
      this.scrolledNav = false
    }
  }

}
</script>

<style lang="scss" scoped>
header {
    background-color: rgba(0, 0, 0, 0);
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: rgb(255, 255, 255);

    div {
        margin: auto 20px;
        i {
            display: inline;
            float: none;
        }
    }

    nav {
        position: relative;
        display: flex;
        flex-direction: row;
        padding: 5px 0;
        transition: 0.5s ease all;
        width: 90%;
        margin: 0 auto;
        @media (min-width: 1140px) {
            max-width: 1080px;
        }

        ul,
        .link {
            font-weight: 500;
            color: #fff;
            list-style: none;
            text-decoration: none;
        }

        li {
            text-transform: uppercase;
            padding: 6px;
            margin-left: 16px;
        }

        .link {
            font-size: 14px;
            transition: 0.5s ease all;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;

            &:hover {
                color: #c50600;
                border-color: #c50600;
            }

            &.no-underline {
                border-bottom: 0;
            }
        }

        .branding {
            margin-left: 0;
            display: flex;
            align-items: center;
            height: 100%;
            img {
                width: 50px;
                transition: 0.5s ease all;
            }

            i {
                margin: 1rem;
            }
        }

        .navigation {
            display: flex;
            align-items: center;
            flex: 1;
            justify-content: flex-end;
        }

        .logo-name {
            font-weight: 700;
            margin-left: 5px;
            font-size: 25px;
            font-family: 'Roboto Mono';
            transition: 0.5s ease all;
        }

        .icon {
            display: flex;
            align-items: center;
            position: absolute;
            top: 0;
            right: 24px;
            height: 100%;

            i {
                cursor: pointer;
                font-size: 24px;
                transition: 0.8s ease all;
            }

        }

        .icon-active {
            transform: rotate(180deg);
        }

        .dropdown-nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            max-width: 250px;
            height: 100%;
            background-color: #fff;
            top: 0;
            right: 0;

            li {
                margin-left: 0;
                .link {
                    color: #000;
                }
            }
        }

    }
}

.scrolled-nav {
    background-color: #000;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    nav {
        padding: 1px 0;

        .logo-name {
            font-size: 20px;
        }

        .branding {
            img {
                width: 30px;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
        }
    }
}
</style>
