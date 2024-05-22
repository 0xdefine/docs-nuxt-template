<script lang="ts" setup>
defineOptions({
  inheritAttrs: false,
});

defineProps({
  title: {
    type: String,
    required: true,
    default: 'zkSync Docs',
  },
  description: {
    type: String,
    required: true,
    default: 'The best place to learn everything about zkSync.',
  },
});
</script>

<template>
  <div class="flex h-full w-full items-center justify-center bg-black">
    <svg
      class="absolute inset-0 flex"
      viewBox="0 0 1200 600"
      xmlns="http://www.w3.org/2000/svg"
      xml:space="preserve"
      style="
        fill-rule: evenodd;
        clip-rule: evenodd;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 1.5;
      "
    >
      <path d="M0-15h1200v630H0z" />
      <circle
        cx="104.598"
        cy="144.338"
        r="27.003"
        style="fill: url(#a)"
      />
      <circle
        cx="72.229"
        cy="107.426"
        r="25.951"
        style="fill: url(#b)"
      />
      <circle
        cx="118.581"
        cy="278.405"
        r="21.595"
        style="fill: url(#c)"
      />
      <circle
        cx="197.005"
        cy="466.964"
        r="22.959"
        style="fill: url(#d)"
      />
      <circle
        cx="275.513"
        cy="379.793"
        r="21.859"
        style="fill: url(#e)"
      />
      <circle
        cx="1095.22"
        cy="144.561"
        r="27.226"
        style="fill: url(#f)"
      />
      <circle
        cx="1127.69"
        cy="107.399"
        r="25.924"
        style="fill: url(#g)"
      />
      <circle
        cx="1081.24"
        cy="278.683"
        r="23.843"
        style="fill: url(#h)"
      />
      <circle
        cx="1003.03"
        cy="466.964"
        r="23.377"
        style="fill: url(#i)"
      />
      <circle
        cx="924.637"
        cy="380.144"
        r="23.491"
        style="fill: url(#j)"
      />
      <path
        d="M104.406 144.557 214.154-15"
        style="fill: none; stroke: url(#k); stroke-width: 3px"
      />
      <path
        d="M1095.59 144.557 985.846-15"
        style="fill: none; stroke: url(#l); stroke-width: 3px"
      />
      <path
        d="M104.406 144.557 475.986-15"
        style="fill: none; stroke: url(#m); stroke-width: 3px"
      />
      <path
        d="M1095.59 144.557 724.014-15"
        style="fill: none; stroke: url(#n); stroke-width: 3px"
      />
      <path
        d="m104.406 144.557 411.483 81.3"
        style="fill: none; stroke: url(#o); stroke-width: 3px"
      />
      <path
        d="m1095.59 144.557-411.479 81.3"
        style="fill: none; stroke: url(#p); stroke-width: 3px"
      />
      <path
        d="M104.406 144.557 0 38.636"
        style="fill: none; stroke: url(#q); stroke-width: 3px"
      />
      <path
        d="M1095.59 144.557 1200 38.636"
        style="fill: none; stroke: url(#r); stroke-width: 3px"
      />
      <path
        d="M104.406 144.557 0 197.885"
        style="fill: none; stroke: url(#s); stroke-width: 3px"
      />
      <path
        d="M1095.59 144.557 1200 197.885"
        style="fill: none; stroke: url(#t); stroke-width: 3px"
      />
      <path
        d="m104.406 144.557 92.539 322.394"
        style="fill: none; stroke: url(#u); stroke-width: 3px"
      />
      <path
        d="m1095.59 144.557-92.53 322.394"
        style="fill: none; stroke: url(#v); stroke-width: 3px"
      />
      <path
        d="M196.945 466.951 0 575.638"
        style="fill: none; stroke: url(#w); stroke-width: 3px"
      />
      <path
        d="M1003.06 466.951 1200 575.638"
        style="fill: none; stroke: url(#x); stroke-width: 3px"
      />
      <path
        d="M196.945 466.951 0 392.65"
        style="fill: none; stroke: url(#y); stroke-width: 3px"
      />
      <path
        d="M1003.06 466.951 1200 392.65"
        style="fill: none; stroke: url(#z); stroke-width: 3px"
      />
      <path
        d="m196.945 466.951 341.769-74.301"
        style="fill: none; stroke: url(#A); stroke-width: 3px"
      />
      <path
        d="M1003.06 466.951 661.286 392.65"
        style="fill: none; stroke: url(#B); stroke-width: 3px"
      />
      <path
        d="M196.945 466.951 573.594 615"
        style="fill: none; stroke: url(#C); stroke-width: 3px"
      />
      <path
        d="M1003.06 466.951 626.406 615"
        style="fill: none; stroke: url(#D); stroke-width: 3px"
      />
      <path
        d="M196.945 466.951 295.383 615"
        style="fill: none; stroke: url(#E); stroke-width: 3px"
      />
      <path
        d="M1003.06 466.951 904.617 615"
        style="fill: none; stroke: url(#F); stroke-width: 3px"
      />
      <path
        d="m475.986-15 36.857 146.457"
        style="fill: none; stroke: url(#G); stroke-width: 3px"
      />
      <path
        d="m724.014-15-36.857 146.457"
        style="fill: none; stroke: url(#H); stroke-width: 3px"
      />
      <g opacity=".53">
        <path
          d="M118.765 278.683 385.269-15"
          style="fill: none; stroke: url(#I); stroke-width: 3px"
        />
        <path
          d="M1081.24 278.683 814.731-15"
          style="fill: none; stroke: url(#J); stroke-width: 3px"
        />
        <path
          d="M118.765 278.683 72.229 107.426"
          style="fill: none; stroke: url(#K); stroke-width: 3px"
        />
        <path
          d="m1081.24 278.683 46.53-171.257"
          style="fill: none; stroke: url(#L); stroke-width: 3px"
        />
        <path
          d="M72.229 107.426 131.089-15"
          style="fill: none; stroke: url(#M); stroke-width: 3px"
        />
        <path
          d="M1127.77 107.426 1068.91-15"
          style="fill: none; stroke: url(#N); stroke-width: 3px"
        />
        <path
          d="M72.229 107.426 0 114.513"
          style="fill: none; stroke: url(#O); stroke-width: 3px"
        />
        <path
          d="m1127.77 107.426 72.23 7.087"
          style="fill: none; stroke: url(#P); stroke-width: 3px"
        />
        <path
          d="M118.765 278.683 0 266.928"
          style="fill: none; stroke: url(#Q); stroke-width: 3px"
        />
        <path
          d="M1081.24 278.683 1200 266.928"
          style="fill: none; stroke: url(#R); stroke-width: 3px"
        />
        <path
          d="M118.765 278.683 0 335.963"
          style="fill: none; stroke: url(#S); stroke-width: 3px"
        />
        <path
          d="m1081.24 278.683 118.76 57.28"
          style="fill: none; stroke: url(#T); stroke-width: 3px"
        />
        <path
          d="m118.765 278.683 156.748 101.11"
          style="fill: none; stroke: url(#U); stroke-width: 3px"
        />
        <path
          d="m1081.24 278.683-156.753 101.11"
          style="fill: none; stroke: url(#V); stroke-width: 3px"
        />
        <path
          d="m275.513 379.793 215.815-91.854"
          style="fill: none; stroke: url(#W); stroke-width: 3px"
        />
        <path
          d="m924.487 379.793-215.815-91.854"
          style="fill: none; stroke: url(#X); stroke-width: 3px"
        />
        <path
          d="M275.513 379.793 220.144 615"
          style="fill: none; stroke: url(#Y); stroke-width: 3px"
        />
        <path
          d="M924.487 379.793 979.856 615"
          style="fill: none; stroke: url(#Z); stroke-width: 3px"
        />
        <path
          d="M275.513 379.793 337.679 615"
          style="fill: none; stroke: url(#aa); stroke-width: 3px"
        />
        <path
          d="M924.487 379.793 862.321 615"
          style="fill: none; stroke: url(#ab); stroke-width: 3px"
        />
        <path
          d="M275.513 379.793 0 460.893"
          style="fill: none; stroke: url(#ac); stroke-width: 3px"
        />
        <path
          d="m924.487 379.793 275.513 81.1"
          style="fill: none; stroke: url(#ad); stroke-width: 3px"
        />
      </g>
      <circle
        cx="104.598"
        cy="144.338"
        r="3.407"
        style="fill: #b9d2ff"
      />
      <circle
        cx="72.229"
        cy="107.426"
        r="3.339"
        style="fill: #b9d2ff; fill-opacity: 0.8"
      />
      <circle
        cx="118.581"
        cy="278.405"
        r="3.682"
        style="fill: #b9d2ff; fill-opacity: 0.7"
      />
      <circle
        cx="197.005"
        cy="466.964"
        r="3.276"
        style="fill: #b9d2ff"
      />
      <circle
        cx="275.513"
        cy="379.793"
        r="3.374"
        style="fill: #b9d2ff"
      />
      <circle
        cx="1095.22"
        cy="144.561"
        r="3.63"
        style="fill: #b9d2ff"
      />
      <circle
        cx="1127.69"
        cy="107.399"
        r="3.312"
        style="fill: #b9d2ff; fill-opacity: 0.8"
      />
      <circle
        cx="1081.24"
        cy="278.683"
        r="3.427"
        style="fill: #b9d2ff; fill-opacity: 0.7"
      />
      <circle
        cx="1003.03"
        cy="466.964"
        r="3.347"
        style="fill: #b9d2ff"
      />
      <circle
        cx="924.637"
        cy="380.144"
        r="3.337"
        style="fill: #b9d2ff"
      />
      <ellipse
        cx="600"
        cy="280"
        rx="387.513"
        ry="401.206"
        style="fill: url(#ae)"
      />
      <defs>
        <linearGradient
          id="k"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(104.406 64.778) scale(109.748)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="l"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 547.795 32.39) scale(109.748)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="m"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(104.406 64.778) scale(371.579)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="n"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 547.795 32.39) scale(371.579)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="o"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(104.406 185.207) scale(411.482)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="p"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 547.795 92.604) scale(411.482)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="q"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 91.596) scale(104.406)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="r"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 600 45.798) scale(104.406)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="s"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 171.221) scale(104.406)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="t"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 600 85.61) scale(104.406)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="u"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(150.675 305.754) scale(46.2692)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="v"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 547.795 152.877) scale(92.5383)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="w"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 521.294) scale(196.945)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="x"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 600 260.647) scale(196.945)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="y"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 429.8) scale(196.945)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="z"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 600 214.9) scale(196.945)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="A"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(196.945 429.8) scale(341.769)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="B"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 501.53 214.9) scale(341.769)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="C"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(196.945 540.975) scale(376.65)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="D"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 501.53 270.488) scale(376.65)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="E"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(196.945 540.975) scale(98.4388)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="F"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 501.53 270.488) scale(98.4388)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="G"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(475.986 58.228) scale(36.8575)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="H"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 362.007 29.114) scale(36.8575)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="I"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(118.765 131.841) scale(266.505)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="J"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 540.62 65.92) scale(266.505)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="K"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(72.23 193.054) scale(46.5353)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="L"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 563.885 96.527) scale(46.5353)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="M"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(72.23 46.213) scale(58.8596)"
        >
          <stop
            offset="0"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
          <stop
            offset=".28"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset=".52"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".78"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="N"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 563.885 23.107) scale(58.8596)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="O"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 110.97) scale(72.2295)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="P"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 600 55.485) scale(72.2295)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="Q"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 272.805) scale(118.765)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="R"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 600 136.403) scale(118.765)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="S"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 307.323) scale(118.765)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="T"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 600 153.662) scale(118.765)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="U"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(118.765 329.238) scale(156.748)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="V"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 540.62 164.619) scale(156.748)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="W"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(275.513 333.866) scale(215.815)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="X"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 462.243 166.933) scale(215.815)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="Y"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(220.144 497.396) scale(55.3688)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="Z"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 489.928 248.698) scale(55.3688)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="aa"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(275.513 497.396) scale(62.1662)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="ab"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 462.243 248.698) scale(62.1662)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="ac"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(0 420.343) scale(275.513)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <linearGradient
          id="ad"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(180 600 210.172) scale(275.513)"
        >
          <stop
            offset="0"
            style="stop-color: #fc7913; stop-opacity: 1"
          />
          <stop
            offset=".22"
            style="stop-color: #bc2e37; stop-opacity: 1"
          />
          <stop
            offset=".48"
            style="stop-color: #8250b7; stop-opacity: 1"
          />
          <stop
            offset=".72"
            style="stop-color: #5b8ecb; stop-opacity: 1"
          />
          <stop
            offset="1"
            style="stop-color: #001d8c; stop-opacity: 1"
          />
        </linearGradient>
        <radialGradient
          id="a"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 -19.87 124.468) scale(37.1014)"
        >
          <stop
            offset="0"
            style="stop-color: #003ea1; stop-opacity: 1"
          />
          <stop
            offset=".45"
            style="stop-color: #cad7eb; stop-opacity: 0.21"
          />
          <stop
            offset="1"
            style="stop-color: #fff; stop-opacity: 0"
          />
        </radialGradient>
        <radialGradient
          id="b"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 -17.598 89.828) scale(35.6559)"
        >
          <stop
            offset="0"
            style="stop-color: #003ea1; stop-opacity: 0.8"
          />
          <stop
            offset=".45"
            style="stop-color: #cad7eb; stop-opacity: 0.17"
          />
          <stop
            offset="1"
            style="stop-color: #fff; stop-opacity: 0"
          />
        </radialGradient>
        <radialGradient
          id="c"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 -79.912 198.493) scale(29.6713)"
        >
          <stop
            offset="0"
            style="stop-color: #003ea1; stop-opacity: 0.8"
          />
          <stop
            offset=".45"
            style="stop-color: #cad7eb; stop-opacity: 0.17"
          />
          <stop
            offset="1"
            style="stop-color: #fff; stop-opacity: 0"
          />
        </radialGradient>
        <radialGradient
          id="d"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 -134.98 331.985) scale(31.5451)"
        >
          <stop
            offset="0"
            style="stop-color: #003ea1; stop-opacity: 1"
          />
          <stop
            offset=".45"
            style="stop-color: #cad7eb; stop-opacity: 0.21"
          />
          <stop
            offset="1"
            style="stop-color: #fff; stop-opacity: 0"
          />
        </radialGradient>
        <radialGradient
          id="e"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90 -52.14 327.653) scale(30.0338)"
        >
          <stop
            offset="0"
            style="stop-color: #003ea1; stop-opacity: 1"
          />
          <stop
            offset=".45"
            style="stop-color: #cad7eb; stop-opacity: 0.21"
          />
          <stop
            offset="1"
            style="stop-color: #fff; stop-opacity: 0"
          />
        </radialGradient>
        <radialGradient
          id="f"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 37.4078 37.4078 0 1095.22 144.561)"
        >
          <stop
            offset="0"
            style="stop-color: #003ea1; stop-opacity: 1"
          />
          <stop
            offset=".45"
            style="stop-color: #cad7eb; stop-opacity: 0.21"
          />
          <stop
            offset="1"
            style="stop-color: #fff; stop-opacity: 0"
          />
        </radialGradient>
        <radialGradient
          id="g"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 35.6188 35.6188 0 1127.69 107.399)"
        >
          <stop
            offset="0"
            style="stop-color: #003ea1; stop-opacity: 0.8"
          />
          <stop
            offset=".45"
            style="stop-color: #cad7eb; stop-opacity: 0.17"
          />
          <stop
            offset="1"
            style="stop-color: #fff; stop-opacity: 0"
          />
        </radialGradient>
        <radialGradient
          id="h"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 32.7599 32.7599 0 1081.24 278.683)"
        >
          <stop
            offset="0"
            style="stop-color: #003ea1; stop-opacity: 0.8"
          />
          <stop
            offset=".45"
            style="stop-color: #cad7eb; stop-opacity: 0.17"
          />
          <stop
            offset="1"
            style="stop-color: #fff; stop-opacity: 0"
          />
        </radialGradient>
        <radialGradient
          id="i"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 32.1193 32.1193 0 1003.04 466.964)"
        >
          <stop
            offset="0"
            style="stop-color: #003ea1; stop-opacity: 1"
          />
          <stop
            offset=".45"
            style="stop-color: #cad7eb; stop-opacity: 0.21"
          />
          <stop
            offset="1"
            style="stop-color: #fff; stop-opacity: 0"
          />
        </radialGradient>
        <radialGradient
          id="j"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 32.2759 32.2759 0 924.637 380.144)"
        >
          <stop
            offset="0"
            style="stop-color: #003ea1; stop-opacity: 1"
          />
          <stop
            offset=".45"
            style="stop-color: #cad7eb; stop-opacity: 0.21"
          />
          <stop
            offset="1"
            style="stop-color: #fff; stop-opacity: 0"
          />
        </radialGradient>
        <radialGradient
          id="ae"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(387.561 0 0 541.658 599.952 280)"
        >
          <stop
            offset="0"
            style="stop-color: #000; stop-opacity: 1"
          />
          <stop
            offset=".51"
            style="stop-color: #000; stop-opacity: 0.76"
          />
          <stop
            offset="1"
            style="stop-color: #000; stop-opacity: 0"
          />
        </radialGradient>
      </defs>
    </svg>
    <div class="absolute inset-0 flex h-full items-start justify-center">
      <div class="flex h-full w-full flex-col content-center items-center justify-center p-20">
        <img
          src="/favicon-32x32.png"
          height="32"
          width="32"
        />
        <h1 class="mt-4 text-center text-[60px] font-bold text-white">
          {{ title }}
        </h1>
        <p class="w-full text-balance px-10 text-center text-[34px] text-white">{{ description.slice(0, 200) }}</p>
      </div>
    </div>
  </div>
</template>
