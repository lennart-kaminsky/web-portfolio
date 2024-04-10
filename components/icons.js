import { motion } from "framer-motion";

const icons = {
  mail: {
    title: "mail",
    viewBox: "-1 0 19 19",
    path: "M16.5 9.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-2.354-2.86a.321.321 0 0 0-.32-.32H3.174a.321.321 0 0 0-.32.32v5.722a.321.321 0 0 0 .32.32h10.652a.321.321 0 0 0 .32-.32zM9.428 8.298H4.854v.8h4.574zm0 1.805H4.854v.8h4.574zm3.598-1.044V7.441h-1.598v1.617z",
  },
  linkedIn: {
    title: "linkedIn",
    viewBox: "0 0 64 64",
    path: "M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M25,44h-5V26h5V44z M22.485,24h-0.028C20.965,24,20,22.888,20,21.499C20,20.08,20.995,19,22.514,19c1.521,0,2.458,1.08,2.486,2.499 C25,22.887,24.035,24,22.485,24z M44,44h-5v-9c0-3-1.446-4-3-4c-1.445,0-3,1-3,4v9h-5V26h5v3c0.343-0.981,1.984-3,5-3c4,0,6,3,6,8 V44z",
  },
  gitHub: {
    title: "gitHub",
    viewBox: "0 0 64 64",
    path: "M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z",
  },
  arrowDown: {
    title: "arrowDown",
    viewBox: "0 -960 960 960",
    path: "M480-253.847 253.847-480 296-522.153l154.001 154.001v-381.847h59.998v381.847L664-522.153 706.153-480 480-253.847Z",
  },
  darkMode: {
    title: "darkMode",
    viewBox: "0 -960 960 960",
    path: "M481.154-140.001q-141.666 0-240.832-99.167Q141.155-338.334 141.155-480q0-135.768 92.115-232.883 92.114-97.115 225.575-105.192 8.615 0 16.922.615t16.307 1.846q-30.615 28.615-48.768 69.153-18.154 40.539-18.154 86.461 0 98.334 68.834 167.168 68.834 68.833 167.168 68.833 46.538 0 86.768-18.153 40.23-18.153 68.461-48.768 1.231 8 1.846 16.307.616 8.307.616 16.922-7.693 133.461-104.808 225.575-97.115 92.115-232.883 92.115Z",
  },
  lightMode: {
    title: "lightMode",
    viewBox: "0 -960 960 960",
    path: "m726.307-562.154-42.153-43.384 77.538-76.307 42.153 42.153-77.538 77.538ZM90.001-170.001v-59.998h779.998v59.998H90.001Zm360-505.383v-107.692h59.998v107.692h-59.998ZM233.693-563.385l-76.307-77.538 42.153-42.153 77.537 77.538-43.383 42.153Zm-11.384 223.384Q229.233-442 303.232-510.999q74-69 176.768-69t176.768 69Q730.767-442 737.691-340.001H222.309Z",
  },
  nextjs: {
    title: "nextjs",
    viewBox: "0 0 48 48",
    path: "M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z",
  },
  react: {
    title: "react",
    viewBox: "0 0 50 50",
    path: "M 34.554688 3.984375 C 33.775003 3.9581582 32.958884 4.0940926 32.140625 4.359375 C 30.504109 4.889941 28.789203 5.9238848 27.029297 7.3554688 C 26.339589 7.9165071 25.643623 8.5578288 24.945312 9.2382812 C 24.262398 8.5751039 23.580733 7.9509974 22.90625 7.4023438 C 21.147758 5.9719089 19.4375 4.9375672 17.804688 4.4082031 C 16.171878 3.8788386 14.547223 3.8624356 13.212891 4.6328125 C 11.878558 5.4031893 11.080619 6.8173558 10.722656 8.4960938 C 10.364693 10.174832 10.404125 12.173992 10.763672 14.412109 C 10.888559 15.189511 11.066671 16.005078 11.269531 16.835938 C 10.507095 17.067004 9.7666767 17.309955 9.0800781 17.578125 C 7.0079817 18.387438 5.2934468 19.355663 4.0449219 20.507812 C 2.7963969 21.659962 1.9902344 23.058304 1.9902344 24.59375 C 1.9902344 26.129196 2.7963969 27.525585 4.0449219 28.677734 C 5.2934468 29.829884 7.0079817 30.800062 9.0800781 31.609375 C 9.8142516 31.896126 10.609118 32.154326 11.429688 32.398438 C 11.134531 33.501278 10.895394 34.571467 10.732422 35.585938 C 10.372587 37.825853 10.334588 39.825265 10.693359 41.507812 C 11.052134 43.19036 11.850478 44.612534 13.191406 45.386719 C 14.532336 46.160905 16.164264 46.141894 17.800781 45.611328 C 19.437297 45.080762 21.15025 44.048772 22.910156 42.617188 C 23.593512 42.061316 24.284757 41.427206 24.976562 40.753906 C 25.671996 41.431263 26.366006 42.068338 27.052734 42.626953 C 28.811227 44.057387 30.523438 45.089776 32.15625 45.619141 C 33.789061 46.148505 35.413715 46.164908 36.748047 45.394531 C 38.082379 44.624154 38.878366 43.209988 39.236328 41.53125 C 39.59429 39.852512 39.554857 37.855304 39.195312 35.617188 C 39.031899 34.599965 38.792614 33.526227 38.496094 32.419922 C 39.343769 32.169866 40.163744 31.904721 40.919922 31.609375 C 42.992018 30.800062 44.706553 29.829884 45.955078 28.677734 C 47.203603 27.525585 48.009766 26.129196 48.009766 24.59375 C 48.009766 23.058304 47.203603 21.659963 45.955078 20.507812 C 44.706553 19.355663 42.992018 18.387438 40.919922 17.578125 C 40.22347 17.306107 39.471688 17.059992 38.697266 16.826172 C 38.901775 15.990221 39.083345 15.168805 39.208984 14.386719 C 39.568819 12.146804 39.606825 10.145439 39.248047 8.4628906 C 38.889279 6.7803434 38.088976 5.3601244 36.748047 4.5859375 C 36.077582 4.1988452 35.334372 4.0105918 34.554688 3.984375 z M 34.462891 6.0195312 C 34.952154 6.03291 35.369535 6.1493386 35.726562 6.3554688 C 36.440618 6.7677287 36.968419 7.5700924 37.25 8.890625 C 37.531581 10.211156 37.521848 11.99533 37.189453 14.064453 C 37.075647 14.772878 36.910402 15.52369 36.722656 16.292969 C 34.677151 15.800695 32.435744 15.435401 30.046875 15.220703 C 28.847638 13.559329 27.615404 12.045781 26.373047 10.703125 C 27.030182 10.061662 27.683063 9.4617259 28.320312 8.9433594 C 29.946026 7.6209332 31.485126 6.7210962 32.769531 6.3046875 C 33.411734 6.0964824 33.973627 6.0061525 34.462891 6.0195312 z M 15.486328 6.0253906 C 15.978419 6.0116533 16.541491 6.1017415 17.185547 6.3105469 C 18.473657 6.7281576 20.015452 7.6275969 21.642578 8.9511719 C 22.267037 9.4591336 22.905298 10.047651 23.548828 10.673828 C 22.297283 12.027473 21.054862 13.55414 19.847656 15.230469 C 17.468889 15.449074 15.236606 15.81635 13.201172 16.310547 C 13.014826 15.545537 12.849558 14.798586 12.736328 14.09375 C 12.403642 12.02283 12.39534 10.238404 12.677734 8.9140625 C 12.960128 7.5897208 13.492238 6.7813032 14.212891 6.3652344 C 14.573216 6.1572002 14.994237 6.0391279 15.486328 6.0253906 z M 24.976562 12.142578 C 25.791172 13.029071 26.605956 13.99916 27.414062 15.042969 C 26.620033 15.009861 25.816288 14.990234 25 14.990234 C 24.167457 14.990234 23.34841 15.010498 22.539062 15.044922 C 23.347352 14.000306 24.16175 13.029737 24.976562 12.142578 z M 25 17.009766 C 26.359894 17.009766 27.685348 17.065647 28.974609 17.160156 C 29.86173 18.434311 30.728648 19.786055 31.554688 21.216797 C 32.280504 22.473948 32.937328 23.729163 33.535156 24.96875 C 32.931017 26.224782 32.263184 27.496972 31.527344 28.771484 C 30.879609 29.893393 30.20319 30.958949 29.515625 31.986328 C 28.059313 32.10805 26.550303 32.175781 25 32.175781 C 23.412375 32.175781 21.869462 32.104031 20.380859 31.976562 C 19.704742 30.963955 19.039735 29.91454 18.402344 28.810547 C 17.668186 27.538949 17.003577 26.269079 16.400391 25.015625 C 17.006106 23.755092 17.673701 22.47818 18.412109 21.199219 C 19.233818 19.775977 20.098207 18.432055 20.980469 17.164062 C 22.283609 17.067424 23.62445 17.009766 25 17.009766 z M 31.548828 17.410156 C 33.197299 17.615841 34.745083 17.901405 36.185547 18.244141 C 35.758129 19.645287 35.231654 21.108808 34.59375 22.619141 C 34.179567 21.820719 33.750599 21.019585 33.287109 20.216797 C 32.725422 19.243926 32.140408 18.316416 31.548828 17.410156 z M 18.34375 17.425781 C 17.764654 18.315097 17.194836 19.224578 16.644531 20.177734 C 16.175094 20.990823 15.737221 21.802736 15.318359 22.611328 C 14.68596 21.110075 14.162654 19.654877 13.738281 18.261719 C 15.168002 17.918363 16.706766 17.633813 18.34375 17.425781 z M 38.164062 18.775391 C 38.872944 18.989877 39.557566 19.21371 40.185547 19.458984 C 42.0957 20.205046 43.60665 21.088493 44.585938 21.992188 C 45.565224 22.895882 45.990234 23.757696 45.990234 24.59375 C 45.990234 25.429804 45.565225 26.291619 44.585938 27.195312 C 43.60665 28.099007 42.0957 28.982454 40.185547 29.728516 C 39.487698 30.001079 38.72096 30.248243 37.923828 30.482422 C 37.355199 28.723643 36.629408 26.888772 35.765625 25.015625 C 36.758785 22.865083 37.561088 20.768289 38.164062 18.775391 z M 11.802734 18.785156 C 12.398803 20.758169 13.190811 22.834118 14.169922 24.962891 C 13.30047 26.846955 12.571087 28.692254 12 30.460938 C 11.23096 30.232919 10.490212 29.992451 9.8144531 29.728516 C 7.9042995 28.982454 6.39335 28.099007 5.4140625 27.195312 C 4.434775 26.291618 4.0097656 25.429804 4.0097656 24.59375 C 4.0097656 23.757696 4.434775 22.895882 5.4140625 21.992188 C 6.39335 21.088493 7.9042995 20.205046 9.8144531 19.458984 C 10.432774 19.217483 11.105915 18.996837 11.802734 18.785156 z M 25 20 C 22.250421 20 20 22.250421 20 25 C 20 27.749579 22.250421 30 25 30 C 27.749579 30 30 27.749579 30 25 C 30 22.250421 27.749579 20 25 20 z M 15.341797 27.365234 C 15.762496 28.177853 16.200028 28.993283 16.671875 29.810547 C 17.041048 30.449973 17.418073 31.072393 17.800781 31.683594 C 16.457817 31.497372 15.181231 31.261605 13.982422 30.982422 C 14.363652 29.81481 14.819744 28.602796 15.341797 27.365234 z M 34.619141 27.365234 C 35.143284 28.605725 35.599609 29.819681 35.982422 30.990234 C 34.779808 31.269089 33.499292 31.504052 32.152344 31.689453 C 32.540071 31.070779 32.922982 30.44057 33.296875 29.792969 C 33.765252 28.981717 34.201083 28.171917 34.619141 27.365234 z M 13.40625 32.923828 C 15.216074 33.352568 17.177716 33.681912 19.257812 33.896484 C 20.64638 35.904859 22.092967 37.709497 23.548828 39.287109 C 22.897813 39.921859 22.252566 40.517583 21.621094 41.03125 C 19.99538 42.353677 18.454326 43.251559 17.169922 43.667969 C 15.885516 44.084378 14.926946 44.029446 14.212891 43.617188 C 13.498835 43.204927 12.972987 42.402563 12.691406 41.082031 C 12.409825 39.761499 12.417606 37.979279 12.75 35.910156 C 12.900793 34.971492 13.12615 33.966374 13.40625 32.923828 z M 36.560547 32.931641 C 36.842987 33.980548 37.069013 34.98935 37.220703 35.933594 C 37.553389 38.004513 37.56169 39.788939 37.279297 41.113281 C 36.996903 42.437623 36.468699 43.247993 35.748047 43.664062 C 35.027395 44.080132 34.059594 44.13441 32.771484 43.716797 C 31.483374 43.299186 29.941578 42.399747 28.314453 41.076172 C 27.678439 40.558811 27.028726 39.958258 26.373047 39.318359 C 27.838664 37.73459 29.295467 35.920758 30.693359 33.900391 C 32.778701 33.687251 34.745791 33.359875 36.560547 32.931641 z M 21.867188 34.101562 C 22.893951 34.157518 23.934244 34.195312 25 34.195312 C 26.030504 34.195312 27.037063 34.159787 28.03125 34.107422 C 27.014961 35.478593 25.979034 36.725149 24.947266 37.847656 C 23.916125 36.722751 22.882144 35.473968 21.867188 34.101562 z",
  },
  javascript: {
    title: "javascript",
    viewBox: "0 0 50 50",
    path: "M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z",
  },
  styledcomponents: {
    title: "styledcomponents",
    viewBox: "0 0 24 24",
    path: "m16.214 6.762-.075.391c-.116.741-.074.953.244 1.228l.307.254-.318 1.418c-.19.846-.423 1.555-.571 1.788-.127.201-.275.497-.307.656-.053.19-.233.381-.508.55-.243.138-.72.508-1.058.805-.27.243-.456.392-.557.456l-.33.261c-.106.17-.166.307-.189.411-.023.107-.01.178.024.23.033.05.09.085.168.107a.954.954 0 0 0 .282.023 3 3 0 0 0 .632-.112c.07-.019.125-.037.173-.053.074-.091.245-.263.548-.562.804-.793 1.111-1.227.794-1.11-.117.042-.064-.064.137-.276.424-.413.667-1.037 1.175-2.994.402-1.545.402-1.567.698-1.567.139 0 .532.024.532.024v-1.928h-.902zm3.839 3.165c-.064 0-.17.096-.233.202-.116.19.021.306 1.767 1.396 1.037.657 1.873 1.217 1.852 1.26-.021.031-.868.582-1.883 1.217-1.842 1.142-1.852 1.153-1.683 1.386.212.275 0 .37 2.391-1.122l1.736-1.111v-.836l-1.937-1.196c-1.047-.656-1.957-1.185-2.01-1.196zm-16.085.117c-.053 0-.963.54-2.01 1.185l-1.958 1.196v.836l1.947 1.217c1.08.666 1.99 1.217 2.032 1.217s.127-.096.212-.212c.127-.201.02-.286-1.768-1.418-1.703-1.069-1.883-1.217-1.713-1.333.106-.074.91-.572 1.778-1.111 1.979-1.217 1.873-1.133 1.714-1.387-.063-.105-.17-.2-.233-.19zm8.684.023c-.292-.002-.92.443-2.8 1.978-.081.193-.088.326-.051.412.024.059.068.1.129.13.06.03.138.048.224.055.171.015.373-.012.536-.044l.11-.025a.386.386 0 0 1 .144-.118c.116-.064.603-.508 1.09-.984.857-.868 1.058-1.26.709-1.387a.24.24 0 0 0 -.09-.017zm2.196.603c-.257.007-.72.305-1.513.938-.398.323-.65.497-.785.533l-.524.414c-.197.36-.226.583-.174.706a.25.25 0 0 0 .138.134.644.644 0 0 0 .24.045 2.18 2.18 0 0 0 .58-.085 3.466 3.466 0 0 0 .291-.092l.029-.012.053-.028c.1-.129.33-.372.618-.652.91-.878 1.375-1.502 1.28-1.735-.043-.113-.117-.17-.233-.166zm-2.424 1.08c-.074.008-.24.136-.539.398-.432.382-.903.602-1.066.504a3.97 3.97 0 0 1 -.114.024c-.166.033-.373.06-.558.045a.708.708 0 0 1 -.252-.063.337.337 0 0 1 -.168-.17c-.037-.09-.037-.202.005-.345l-.65.534-1.471 1.217v1.973l4.82-3.797a.41.41 0 0 1 .016-.123c.037-.134.035-.202-.023-.196zm2.074.639c-.073 0-.195.103-.39.31-.265.283-.682.557-.903.613l-.034.018a2.191 2.191 0 0 1 -.11.042c-.06.02-.138.044-.228.068-.18.049-.404.094-.604.089a.732.732 0 0 1 -.275-.054.344.344 0 0 1 -.184-.18c-.058-.139-.035-.334.092-.611l-4.252 3.349v1.205h1.868l3.962-3.112c.103-.114.258-.27.467-.465.56-.519.687-.698.687-.963 0-.206-.023-.31-.096-.31zm.943 1.95-.339.338c-.19.18-.529.402-.761.497l-.046.02-.003.005-.01.01c-.009.007-.013.008-.02.011a3.432 3.432 0 0 1 -.282.093 3.058 3.058 0 0 1 -.65.115 1.035 1.035 0 0 1 -.31-.027.364.364 0 0 1 -.218-.144c-.048-.074-.062-.173-.035-.295a1.11 1.11 0 0 1 .095-.25l-3.197 2.526h4.252l.508-.582c.698-.814 1.016-1.396 1.016-1.894z",
  },
  rest: {
    title: "rest",
    viewBox: "0 0 123 101",
    path: "M102.79 7.11001L105.38 10.52C106.06 11.42 105.89 12.71 104.99 13.39L102.24 15.48C102.74 16.81 103.06 18.23 103.19 19.68L106.32 20.11C107.44 20.26 108.22 21.3 108.07 22.42L107.49 26.67C107.34 27.79 106.3 28.58 105.18 28.42L101.76 27.95C101.15 29.28 100.37 30.5 99.4497 31.59L101.37 34.11C102.05 35.01 101.87 36.3 100.97 36.98L97.5597 39.57C96.6597 40.25 95.3697 40.07 94.6897 39.18L92.5997 36.43C91.2597 36.93 89.8497 37.25 88.3897 37.38L87.9597 40.51C87.8097 41.63 86.7697 42.41 85.6497 42.26L81.3997 41.68C80.2797 41.53 79.4997 40.49 79.6497 39.37L80.1197 35.95C78.7997 35.34 77.5697 34.56 76.4797 33.65L73.9597 35.56C73.0597 36.24 71.7697 36.07 71.0897 35.17L68.4997 31.76C67.8197 30.86 67.9897 29.57 68.8897 28.89L71.6397 26.8C71.1397 25.46 70.8197 24.05 70.6897 22.6L67.5597 22.17C66.4397 22.02 65.6497 20.98 65.8097 19.86L66.3897 15.61C66.5497 14.49 67.5797 13.71 68.6997 13.86L72.1197 14.33C72.7297 13.01 73.5097 11.78 74.4197 10.69L72.5097 8.17001C71.8297 7.28001 71.9997 5.99001 72.8997 5.31001L76.3097 2.72001C77.2097 2.04001 78.4997 2.21001 79.1797 3.11001L81.2697 5.86001C82.5997 5.36001 84.0197 5.04001 85.4697 4.91001L85.8997 1.78001C86.0497 0.660014 87.0897 -0.129986 88.2097 0.0200142L92.4597 0.600014C93.5797 0.750014 94.3697 1.79001 94.2097 2.91001L93.7397 6.33001C95.0697 6.94001 96.2897 7.72001 97.3897 8.64001L99.9097 6.73001C100.81 6.04001 102.1 6.21001 102.79 7.11001ZM29.6697 67.12V50.62H38.1697C39.7497 50.62 40.9497 50.75 41.7797 51.03C42.6097 51.3 43.2897 51.8 43.7897 52.53C44.2997 53.27 44.5597 54.16 44.5597 55.21C44.5597 56.12 44.3597 56.92 43.9697 57.58C43.5797 58.25 43.0397 58.79 42.3597 59.2C41.9297 59.46 41.3297 59.68 40.5697 59.85C41.1797 60.06 41.6197 60.25 41.8897 60.46C42.0797 60.6 42.3497 60.89 42.6997 61.33C43.0497 61.77 43.2897 62.12 43.4097 62.36L45.8897 67.13H40.1297L37.4097 62.1C37.0597 61.45 36.7597 61.02 36.4897 60.83C36.1197 60.58 35.6997 60.45 35.2397 60.45H34.7897V67.13H29.6697V67.12ZM47.6497 95.85H38.1297L36.7597 100.33H28.1797L38.4097 73.14H47.6097L57.7997 100.33H48.9997L47.6497 95.85ZM45.8697 89.96L42.8997 80.18L39.9197 89.96H45.8697ZM59.7797 73.14H73.7597C76.8097 73.14 79.0897 73.86 80.5997 75.31C82.1097 76.76 82.8697 78.83 82.8697 81.5C82.8697 84.25 82.0397 86.4 80.3897 87.95C78.7397 89.5 76.2097 90.27 72.8197 90.27H68.2097V100.33H59.7797V73.14ZM68.2097 84.76H70.2797C71.9097 84.76 73.0597 84.48 73.7197 83.91C74.3797 83.35 74.7097 82.62 74.7097 81.75C74.7097 80.9 74.4197 80.17 73.8497 79.58C73.2797 78.99 72.1997 78.69 70.6197 78.69H68.2097V84.76ZM86.2697 73.14H94.6997V100.33H86.2697V73.14ZM34.7897 57.32H36.9397C37.1697 57.32 37.6197 57.24 38.2897 57.09C38.6297 57.02 38.9097 56.85 39.1197 56.57C39.3397 56.29 39.4397 55.97 39.4397 55.61C39.4397 55.08 39.2697 54.66 38.9297 54.38C38.5897 54.09 37.9597 53.95 37.0297 53.95H34.7897V57.32ZM46.8697 50.62H60.5197V54.14H51.9897V56.77H59.8997V60.13H51.9897V63.38H60.7697V67.11H46.8697V50.62ZM61.9797 61.66L66.8197 61.36C66.9197 62.15 67.1397 62.74 67.4597 63.15C67.9897 63.81 68.7397 64.15 69.7097 64.15C70.4297 64.15 70.9997 63.98 71.3897 63.64C71.7797 63.3 71.9797 62.9 71.9797 62.45C71.9797 62.02 71.7897 61.64 71.4197 61.3C71.0497 60.96 70.1797 60.65 68.8097 60.34C66.5797 59.84 64.9897 59.17 64.0297 58.34C63.0697 57.51 62.5897 56.45 62.5897 55.16C62.5897 54.31 62.8397 53.51 63.3297 52.76C63.8197 52.01 64.5597 51.41 65.5497 50.98C66.5397 50.55 67.8897 50.34 69.6097 50.34C71.7197 50.34 73.3197 50.73 74.4297 51.52C75.5297 52.31 76.1897 53.55 76.3997 55.27L71.6097 55.56C71.4797 54.81 71.2097 54.26 70.8097 53.93C70.3997 53.59 69.8297 53.42 69.1197 53.42C68.5297 53.42 68.0797 53.55 67.7797 53.8C67.4797 54.05 67.3297 54.36 67.3297 54.72C67.3297 54.98 67.4597 55.21 67.6997 55.43C67.9397 55.64 68.4997 55.85 69.3997 56.04C71.6297 56.52 73.2297 57.01 74.1897 57.5C75.1497 57.99 75.8597 58.6 76.2897 59.33C76.7297 60.05 76.9497 60.87 76.9497 61.77C76.9497 62.83 76.6597 63.8 76.0697 64.69C75.4897 65.58 74.6697 66.26 73.6197 66.72C72.5697 67.18 71.2497 67.41 69.6497 67.41C66.8497 67.41 64.8997 66.87 63.8197 65.79C62.7397 64.69 62.1297 63.32 61.9797 61.66ZM77.6897 50.62H93.1997V54.7H87.9997V67.12H82.8997V54.7H77.6897V50.62ZM60.5297 11.46C58.6997 11.32 56.8497 11.34 55.0197 11.52C49.3897 12.06 43.9197 14.11 39.3997 17.62C34.1697 21.67 30.1997 27.73 28.6697 35.76L28.1897 38.27L25.6897 38.71C23.2397 39.14 21.0497 39.73 19.1297 40.48C17.2697 41.2 15.6097 42.09 14.1597 43.14C12.9997 43.98 11.9997 44.92 11.1497 45.94C8.51969 49.09 7.29969 53.04 7.32969 57.04C7.35969 61.1 8.67969 65.2 11.1197 68.57C12.0297 69.82 13.0797 70.97 14.2797 71.97C15.4997 72.98 16.8697 73.82 18.4097 74.45C19.2797 74.81 20.2097 75.11 21.1797 75.35V82.84C19.1797 82.48 17.3397 81.94 15.6197 81.23C13.3497 80.29 11.3397 79.08 9.56969 77.6C7.88969 76.2 6.41969 74.61 5.16969 72.88C1.83969 68.28 0.0396898 62.66 -0.000310225 57.06C-0.0403102 51.4 1.71969 45.77 5.51969 41.21C6.74969 39.73 8.19969 38.37 9.85969 37.17C11.7897 35.77 13.9997 34.59 16.4997 33.62C18.2197 32.95 20.0597 32.39 21.9997 31.94C24.1997 23.2 28.8897 16.47 34.9197 11.8C40.5597 7.43001 47.3497 4.88001 54.3397 4.21001C58.0097 3.86001 61.7297 4.02001 65.3697 4.70001C65.2897 5.03001 65.2197 5.36001 65.1797 5.70001L65.1697 5.76001C65.0997 6.33001 65.0697 6.90001 65.0997 7.48001C64.3297 7.78001 63.6097 8.19001 62.9597 8.69001L62.9297 8.71001C61.9597 9.44001 61.1397 10.38 60.5297 11.46ZM113.44 30.66C114 31.17 114.54 31.7 115.07 32.27C116.14 33.42 117.15 34.72 118.1 36.17C121.3 41.09 122.94 47.66 122.87 54.09C122.8 60.4 121.1 66.68 117.62 71.3C115.35 74.31 112.44 76.77 108.95 78.72C106.56 80.06 103.87 81.17 100.94 82.07V74.32C102.52 73.73 103.99 73.07 105.34 72.32C107.97 70.85 110.12 69.06 111.73 66.91C114.23 63.58 115.46 58.87 115.51 54.04C115.57 48.97 114.33 43.88 111.92 40.18C111.23 39.11 110.47 38.15 109.67 37.29C109.36 36.96 109.05 36.65 108.73 36.35C108.78 35.85 108.8 35.34 108.77 34.83C109.54 34.53 110.26 34.12 110.91 33.62L110.94 33.6C111.97 32.81 112.83 31.81 113.44 30.66ZM88.0797 12.8C92.6897 13.43 95.9097 17.68 95.2797 22.29C94.6497 26.9 90.3997 30.13 85.7897 29.5C81.1797 28.87 77.9497 24.62 78.5897 20.01C79.2297 15.4 83.4697 12.17 88.0797 12.8Z",
  },
  git: {
    title: "git",
    viewBox: "0 0 50 50",
    path: "M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z",
  },
  mongodb: {
    title: "mongodb",
    viewBox: "0 0 1024 1024",
    path: "M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z",
  },
  menu: {
    title: "menu",
    viewBox: "0 -960 960 960",
    path: "M111.869-228.282v-91.001h736.262v91.001H111.869Zm0-206.218v-91h736.262v91H111.869Zm0-206.217v-91.001h736.262v91.001H111.869Z",
  },
  menu2: {
    title: "menu2",
    viewBox: "0 0 50 50",
    path: "M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z",
  },
};

export default function Icon({ variant, size = 50, color, ...rest }) {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={icons[variant].viewBox}
      width={size}
      fill={color}
      {...rest}
    >
      <title>{icons[variant].viewBox}</title>
      <path d={icons[variant].path} />
    </motion.svg>
  );
}
