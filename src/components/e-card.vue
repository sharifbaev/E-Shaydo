<template>
  <div class="card-style">
    <span v-if="getSvg(icon) === 1">
      <svg width="96" height="94" viewBox="0 0 96 94" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M28.062 35.5287C24.432 35.5053 21 36.5029 18 37.6732L23.904 12.515C23.904 12.515 35.916 3.94853 51.594 13.8257L45.1335 40.2084C39.1335 36.8965 33.234 35.5594 28.062 35.5287ZM74.238 22.2342C70.5 22.2342 64.386 22.1787 58.464 18.4293L51.5925 44.6598C63.069 52.688 74.724 49.8164 79.587 48.0083L86.391 19.8571C86.391 19.8571 81.6495 22.2342 74.238 22.2342ZM16.7955 45.2172L9.54001 73.9916V74.072C9.54001 74.072 14.451 71.0439 22.0965 71.0893C26.1495 71.1127 30.9705 71.6364 36.2355 74.7333L43.1385 47.7362C37.593 44.1873 32.193 42.685 27.5925 42.7142C22.9575 42.7464 19.1355 44.3248 16.7955 45.2172ZM50.055 52.3662L43.194 79.4027C49.4505 83.7971 55.149 85.0449 59.7945 85.1312C67.2465 85.2687 71.8905 82.8872 71.8905 82.8872V82.7599L78.1905 55.6795C75.558 56.3378 72.186 57.3428 68.667 57.3428C63.0585 57.3428 56.586 56.4139 50.055 52.3662Z"
          stroke="url(#paint0_linear_8906_26)" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round"
          stroke-linejoin="round"/>
        <path d="M40.7625 15.4598C35.4465 14.19 31.338 15.3749 29.163 16.3272L27.006 25.5213L40.7625 15.4598Z"
            fill="url(#paint1_linear_8906_26)"/>
        <path d="M73.29 28.0828C70.7025 28.0652 66.8085 27.9189 62.5065 26.6418L59.5395 37.9644L73.29 28.0828Z"
            fill="url(#paint2_linear_8906_26)"/>
        <path
            d="M32.8395 49.3585C30.7515 48.7515 28.992 48.573 27.6315 48.5657C25.515 48.5803 23.556 49.0557 21.867 49.6087L19.1805 60.2568L32.8395 49.3585Z"
            fill="url(#paint3_linear_8906_26)"/>
        <path d="M65.136 63.0597C61.2075 62.7832 57.5385 62.0459 54.093 60.8127L51.054 72.7877L65.136 63.0597Z"
              fill="url(#paint4_linear_8906_26)"/>
        <defs>
          <linearGradient id="paint0_linear_8906_26" x1="47.9655" y1="7.60567" x2="47.9655" y2="86.5999"
                          gradientUnits="userSpaceOnUse">
            <stop stop-color="#1A6DFF"/>
            <stop offset="1" stop-color="#C822FF"/>
          </linearGradient>
          <linearGradient id="paint1_linear_8906_26" x1="33.885" y1="14.9068" x2="33.885" y2="25.5213"
                          gradientUnits="userSpaceOnUse">
            <stop stop-color="#6DC7FF"/>
            <stop offset="1" stop-color="#E6ABFF"/>
          </linearGradient>
          <linearGradient id="paint2_linear_8906_26" x1="66.414" y1="26.6418" x2="66.414" y2="37.9629"
                          gradientUnits="userSpaceOnUse">
            <stop stop-color="#6DC7FF"/>
            <stop offset="1" stop-color="#E6ABFF"/>
          </linearGradient>
          <linearGradient id="paint3_linear_8906_26" x1="26.01" y1="48.5657" x2="26.01" y2="60.2568"
                          gradientUnits="userSpaceOnUse">
            <stop stop-color="#6DC7FF"/>
            <stop offset="1" stop-color="#E6ABFF"/>
          </linearGradient>
          <linearGradient id="paint4_linear_8906_26" x1="58.095" y1="60.8127" x2="58.095" y2="72.7877"
                          gradientUnits="userSpaceOnUse">
            <stop stop-color="#6DC7FF"/>
            <stop offset="1" stop-color="#E6ABFF"/>
          </linearGradient>
        </defs>
      </svg>

    </span>
    <span v-if="getSvg(icon) === 2">
      <svg width="96" height="109" viewBox="0 0 96 109" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect y="0.761963" width="96" height="107.245" fill="url(#pattern0)"/>
        <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_8907_2" transform="matrix(0.0116368 0 0 0.0104167 -0.0585659 0)"/>
            </pattern>
            <image id="image0_8907_2" width="96" height="96" xlink:href="data:image/png;base64,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"/>
        </defs>
      </svg>
    </span>
    <span v-if="getSvg(icon) === 3">
      <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M62.898 9.5985C62.4105 13.125 60.3405 15.987 59.2965 17.2365C57.2385 19.7085 54.144 21.543 51.0795 22.218C51.4515 19.3725 53.094 16.5825 54.795 14.6535C56.7795 12.4125 59.8755 10.5285 62.898 9.5985ZM65.8365 6C61.1805 6.2985 55.731 9.072 52.5495 12.663C49.665 15.9345 47.2725 20.793 48.204 25.494C48.333 25.4985 48.462 25.5 48.5925 25.5C53.5545 25.5 58.626 22.7295 61.602 19.1565C64.458 15.7395 66.624 10.914 65.8365 6Z" fill="url(#paint0_linear_8907_3)"/>
        <path d="M66.252 31.506C69.918 31.506 73.725 33.0345 76.9095 35.7045C71.952 39.489 69 45.342 69 51.75C69 59.361 73.2405 66.2085 79.824 69.6645C78.7665 71.9085 77.5395 74.058 76.1625 76.0785C73.1775 80.4435 69.168 85.458 64.6095 85.4955H64.491C62.64 85.4955 61.425 85.0275 59.7405 84.3795C57.588 83.5515 54.909 82.521 50.4825 82.4985L50.229 82.503L49.9875 82.5C45.5895 82.521 42.9105 83.553 40.7595 84.381C39.0765 85.029 37.86 85.497 36.009 85.497H35.883C31.332 85.4595 27.3225 80.445 24.3405 76.083C14.8845 62.205 14.8755 47.172 19.671 40.0695C23.1735 34.869 28.896 31.5075 34.251 31.5075C37.1295 31.5075 39.471 32.223 41.952 32.9805C44.397 33.7275 46.929 34.5 49.875 34.5H50.25H50.625C53.571 34.5 56.103 33.7275 58.551 32.979C61.0305 32.2215 63.3735 31.506 66.252 31.506ZM66.252 28.506C59.9025 28.506 55.872 31.5 50.625 31.5C50.484 31.5 50.25 31.5 50.25 31.5C50.25 31.5 50.016 31.5 49.875 31.5C44.628 31.5 40.5975 28.506 34.248 28.506C28.0155 28.506 21.375 32.163 17.181 38.3925C11.25 47.1765 12.261 63.6825 21.861 77.7705C25.2915 82.788 29.877 88.446 35.859 88.494C35.91 88.494 35.9595 88.4955 36.009 88.4955C41.22 88.4955 42.849 85.5345 50.0025 85.5C50.007 85.5 50.013 85.5 50.0175 85.5C50.0985 85.5 50.1705 85.5045 50.25 85.5045C50.3295 85.5045 50.4015 85.5 50.4825 85.5C50.487 85.5 50.493 85.5 50.4975 85.5C57.651 85.5345 59.2815 88.4955 64.491 88.4955C64.5405 88.4955 64.5915 88.4955 64.641 88.494C70.623 88.4445 75.2085 82.788 78.639 77.7705C80.7795 74.6295 82.47 71.367 83.775 68.097C76.935 65.808 72 59.361 72 51.75C72 44.934 75.963 39.06 81.7005 36.258C77.529 31.338 71.733 28.506 66.252 28.506Z" fill="url(#paint1_linear_8907_3)"/>
        <path d="M33.528 77.9415C32.208 76.641 30.7845 74.8785 29.298 72.705C24.978 66.363 22.5 58.9995 22.5 52.5C22.5 47.223 24.975 42.447 29.4705 39.0525L31.278 41.4465C27.552 44.2605 25.5 48.186 25.5 52.5C25.5 58.4115 27.7875 65.1585 31.7775 71.0145C33.153 73.0275 34.452 74.64 35.634 75.8055L33.528 77.9415Z" fill="url(#paint2_linear_8907_3)"/>
        <defs>
            <linearGradient id="paint0_linear_8907_3" x1="57" y1="6.8745" x2="57" y2="88.1445" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1A6DFF"/>
                <stop offset="1" stop-color="#C822FF"/>
            </linearGradient>
            <linearGradient id="paint1_linear_8907_3" x1="48.6375" y1="6.87448" x2="48.6375" y2="88.1445" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1A6DFF"/>
                <stop offset="1" stop-color="#C822FF"/>
            </linearGradient>
            <linearGradient id="paint2_linear_8907_3" x1="29.067" y1="39.0525" x2="29.067" y2="77.9415" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6DC7FF"/>
                <stop offset="1" stop-color="#E6ABFF"/>
            </linearGradient>
        </defs>
      </svg>
    </span>
    <h3 class="title-style">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
    <e-button
        text="Начать"
        :url="url"
        :arrow="true"
        style="width: 150px; margin: 20px auto 0;"/>
  </div>
</template>

<script>
import EButton from "@/components/e-button.vue";

export default {
  name: "e-card",
  components: {
    EButton
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  methods: {
    getSvg() {
      if (this.icon === 'windows') {
        return 1
      } else if (this.icon === 'linux'){
        return 2
      } else if (this.icon === 'mac'){
        return 3
      }
    }
  }

}
</script>

<style scoped>
.card-style {
  background-color: #2B076E;
  padding: 30px 10px;
  max-width: 250px;
  height: 312px;
  border-radius: 16px;
  text-align: center;
}
.card-style:hover {
  transform: scale3d(1.1, 1.1, 0.1);
  transition: transform .3s ease-out
}
.title-style {
  color: #FFFFFF;
  font-weight: 700;
  font-size: 24px;
  margin-top: 10px;
}
.card-description{
  color: #FFFFFF;
  font-size: 12px;
  margin-top: 10px;
  line-height: 1.8em;
}
</style>