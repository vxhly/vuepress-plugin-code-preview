<template>
  <div class="code-preview">

    <template v-if="embedBox === 'codesandbox'">
      <iframe
        :src="embedUrl"
        style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
        title="code-preview"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      >
      </iframe>
    </template>

  </div>
</template>

<script>
  export default {
    name: "CodePreview",
    props: {
      // Copy codesandbox embed url to it.
      embedUrl: {
        type: String,
        required: true,
        default: null,
      },
      // Code embedding platform.
      embedBox: {
        type: String,
        default: "codesandbox",
        validator: (value) => {
          return ["codesandbox"].indexOf(value) !== -1;
        },
      },
    },
  };
</script>

<style>
  .code-preview {
    margin: 20px auto;
  }
</style>