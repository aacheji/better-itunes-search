
var app = new Vue({
    el: '#app',
    data: {
      searchKey: "Regina Spektor",
      mediaType: "music",
      isPreviewShowing: false,
      loadingData: false,
      previewMediaTrackName: "",
      data: [],
    },
    mounted() {
      M.AutoInit()
      this.onSubmit()
    },
    methods: {
      onSubmit() {
        if (this.searchKey == "" || this.searchKey == null) {
          alert("Please enter a search key")
          return
        }
        this.loadingData = true
        let url = new URL("https://itunes.apple.com/search")
        url.searchParams.set("country", "us")
        url.searchParams.set("term", this.searchKey)
        url.searchParams.set("version", 2)
        url.searchParams.set("media", this.mediaType)

        fetch(url.href)
          .then(res => {
            return res.json()
          })
          .then(res => {
            this.data = res.results
            this.loadingData = false
          })
      },

      playMedia(item) {
        this.isPreviewShowing = true
        let mediaControl = this.$refs.videoControl
        if (!mediaControl) {
          mediaControl = this.$refs.audioControl
        }
        this.previewMediaTrackName = item.trackName
        mediaControl.src = item.previewUrl
        mediaControl.play()
      },

      closeVideo() {
        let mediaControl = this.$refs.videoControl
        if (!mediaControl) {
          mediaControl = this.$refs.audioControl
        }
        mediaControl.src = ""
        this.previewMediaTrackName = ""
        this.isPreviewShowing = false
      },

      raiseImgQuality(url) {
        return url.replace("100x100bb.jpg", "300x300bb.jpg")
      },
      formatDate(dateString) {
        return (new Date(dateString)).toDateString().slice(4)
      },

      capitalize(string) {
        if (string) {
          return string.charAt(0).toUpperCase() + string.slice(1)
        }
      },

      millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      },

      formatCurrency(amount) {
        if (!amount) {
          return ""
        }
        if (amount == 0 || amount == 0.00) {
          return "Free"
        }
        return `$${amount}`
      }
    },
    computed: {
      previewMediaIsAudio() {
        return this.mediaType == "music" || this.mediaType == "audiobook"
      },
    }
})
