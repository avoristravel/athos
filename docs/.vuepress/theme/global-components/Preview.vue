<template>
    <div class="preview">
        <div class="preview__actions">
            <div v-if="$store.state.themes.themes.length" class="preview__theme-box">
                <div class="preview__theme">
                    <select v-model="themeSelected" class="preview__theme-select" @change="selectTheme">
                        <option v-for="theme in $store.state.themes.themes" :key="theme.name" :value="theme.name">
                            {{ theme.name }}
                        </option>
                    </select>
                    <span class="preview__theme-arrow"></span>
                    <button v-show="showApplyBtn" class="preview__theme-btn" @click.prevent="selectGlobalTheme">
                        <svg
                            class="preview__theme-btn-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                        >
                            <path fill="currentColor" d="M14.9142136,8.33333333 L21.9142136,8.33333333 L21.9142136,10.3333333 L14.9142136,10.3333333 L14.9142136,8.33333333 Z M9.91421356,3 L11.9142136,3 L11.9142136,21 L9.91421356,21 L9.91421356,3 Z M14.9142136,3 L21.9142136,3 L21.9142136,5 L14.9142136,5 L14.9142136,3 Z M5.12132034,12.0355339 L3,9.91421356 L4.41421356,8.5 L6.53553391,10.6213203 L7.94974747,12.0355339 L4.41421356,15.5710678 L3,14.1568542 L5.12132034,12.0355339 Z M14.9142136,13.6666667 L21.9142136,13.6666667 L21.9142136,15.6666667 L14.9142136,15.6666667 L14.9142136,13.6666667 Z M14.9142136,19 L21.9142136,19 L21.9142136,21 L14.9142136,21 L14.9142136,19 Z" transform="translate(-3 -3)" />
                        </svg>
                        <span class="preview__theme-btn-text">Aplicar a todo</span>
                    </button>
                </div>
            </div>
            <button v-show="codeIsVisible" class="preview__action" @click.prevent="copyCode">
                <span v-show="copied" class="preview__copied">
                    Copied to Clipboard!
                </span>
                <svg
                    v-show="!copied"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z" />
                </svg>
            </button>
            <button v-if="$slots.default" class="preview__action" :class="{ 'is-active': codeIsVisible }" @click.prevent="toggleCode">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                </svg>
            </button>
            <button class="preview__action" :class="{ 'is-active': changedColor }" @click.prevent="toggleColor">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M24 0H0v24h24z" fill="none" />
                    <path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z" />
                </svg>
            </button>
            <button class="preview__action" @click.prevent="toggleDemo">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
            </button>
        </div>
        <div class="preview__inner">
            <div class="preview__demo" :class="[{ 'is-active': demoIsFullscreen }, themeClass]">
                <slot name="demo" />
                <button v-show="demoIsFullscreen" class="preview__action preview__action--close" @click.prevent="toggleDemo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
                    </svg>
                </button>
            </div>
            <div v-show="codeIsVisible" ref="codeSnippet" class="preview__code">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                codeIsVisible: false,
                demoIsFullscreen: false,
                copied: false,
                themeSelected: 'Default',
                themeClass: '',
                showApplyBtn: false,
                iconsTheme: '',
                fontsTheme: [],
                changedColor: false
            }
        },
        computed: {
            globalTheme () {
                return this.$store.state.themes.currentTheme
            }
        },
        watch: {
            globalTheme (newTheme, oldTheme) {
                const theme = this.$store.getters['themes/getThemeByName'](newTheme)
                this.themeClass = theme.class
                this.themeSelected = newTheme
                this.showApplyBtn = false
                this.changeIconsTheme(theme.icons)
                this.changeFontsTheme(theme.fonts)
            }
        },
        mounted () {
            this.escapePress()
            this.setGlobalTheme()
        },
        methods: {
            selectTheme () {
                const theme = this.$store.getters['themes/getThemeByName'](this.themeSelected)
                this.themeClass = theme.class
                this.showApplyBtn = true
                this.changeIconsTheme(theme.icons)
                this.changeFontsTheme(theme.fonts)
            },
            selectGlobalTheme () {
                this.$store.commit('themes/selectTheme', this.themeSelected)
                this.showApplyBtn = false
            },
            setGlobalTheme () {
                if (this.$store.state.themes.currentTheme) {
                    this.themeSelected = this.$store.state.themes.currentTheme
                    const theme = this.$store.getters['themes/getThemeByName'](this.$store.state.themes.currentTheme)
                    this.themeClass = theme.class
                    this.changeIconsTheme(theme.icons)
                    this.changeFontsTheme(theme.fonts)
                } else {
                    this.changeIconsTheme(this.$store.getters['themes/getThemeByName']('Default').icons)
                    this.changeFontsTheme(this.$store.getters['themes/getThemeByName']('Default').fonts)
                }
            },
            changeIconsTheme (theme) {
                this.iconsTheme = theme
                this.$emit('updateHead')
            },
            changeFontsTheme (theme) {
                this.fontsTheme = theme
                this.$emit('updateHead')
            },
            getFontsTheme () {
                return this.fontsTheme.map((item, index) => {
                    return { rel: 'stylesheet', href: item, id: `fontsThemes${index}` }
                })
            },
            toggleCode () {
                this.codeIsVisible = !this.codeIsVisible
            },
            copyCode () {
                const node = this.$refs.codeSnippet

                if (window.getSelection) {
                    const selection = window.getSelection()
                    const range = document.createRange()
                    range.selectNodeContents(node)
                    selection.removeAllRanges()
                    selection.addRange(range)
                    document.execCommand('copy')
                    selection.removeAllRanges()
                    this.toggleCopied()
                } else {
                    return console.warn('Could not select text in node: Unsupported browser.')
                }
            },
            toggleDemo () {
                this.demoIsFullscreen = !this.demoIsFullscreen
                this.$store.commit('overlay/toggleOverlay', this.demoIsFullscreen)
            },
            toggleCopied () {
                this.copied = !this.copied
                setTimeout(() => { this.copied = !this.copied }, 1000)
            },
            escapePress () {
                document.addEventListener('keydown', (e) => e.keyCode === 27 && this.demoIsFullscreen && this.toggleDemo())
            },
            toggleColor () {
                if (!this.changedColor) {
                    this.$el.style.setProperty('--bg-color', '#383838')
                } else {
                    this.$el.style.setProperty('--bg-color', 'transparent')
                }

                this.changedColor = !this.changedColor
            }
        },
        metaInfo () {
            return {
                link: [
                    { rel: 'stylesheet', href: this.iconsTheme, id: 'iconsThemes' },
                    ...this.getFontsTheme()
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
  .preview {
    --bg-color: transparent;

    margin-bottom: 4rem;

    &__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      margin-bottom: 0.5rem;
    }

    &__action {
      all: unset;
      cursor: pointer;
      padding: 0.25rem;
      border-radius: 0.25rem;
      margin-left: 0.5rem;
      transition: all 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover:not(&--close):not(.is-active) {
        fill: var(--docs-color-primary);
      }

      &.is-active {
        background-color: var(--docs-color-primary);
        fill: #fff;
      }

      &--close {
        position: fixed;
        right: 1rem;
        bottom: 1rem;
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.08);
        background-color: var(--docs-color-primary);
        fill: #fff;
      }
    }

    &__theme-box {
      justify-self: flex-start;
      align-self: flex-end;
      margin-right: auto;
      margin-left: 0;

      @include breakpoint(s down) {
        width: 100%;
        order: 99;
        margin-top: 0.5rem;
      }
    }

    &__theme {
      display: flex;
      font-size: 0.8em;
      color: #8a8a8a;

      &-select {
        border: 0;
        appearance: none;
        background-color: var(--docs-sidebar-background);
        vertical-align: middle;
        align-self: stretch;
        font: inherit;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        outline: none;
        color: currentColor;
        flex-grow: 1;
        cursor: pointer;
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
        min-height: 2rem;
      }

      &-arrow {
        background-color: var(--docs-sidebar-background);
        align-self: stretch;
        display: flex;
        align-items: center;
        padding-right: 0.5rem;
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;

        &::after {
          @include triangle('bottom', currentColor, 0.25rem);

          content: "";
        }
      }

      &-btn {
        all: unset;
        background-color: #e9eef7;
        padding: 0.5rem;
        cursor: pointer;
        transition: all 0.3s;
        margin-left: 0.5rem;
        display: flex;
        align-items: center;
        border-radius: 0.25rem;

        &:hover {
          background: var(--docs-color-primary);
          color: #fff;
        }

        &-icon {
          width: 100%;
          height: auto;
          max-width: 1rem;
          margin-right: 0.5rem;
          opacity: 0.7;
        }
      }
    }

    &__copied {
      font-size: 0.75em;
      color: var(--docs-color-primary);
    }

    &__inner {
      border-radius: 0.25rem;
      background-color: #fff;
      border: 1px solid var(--docs-color-border);
    }

    &__demo {
      padding: 2rem;
      background: var(--bg-color);

      &.is-active {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 200;
        background-color: #fff;
        width: 100vw;
        height: 100vh;
        overflow-y: auto;
        padding: 0;
      }
    }

    pre {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
</style>
