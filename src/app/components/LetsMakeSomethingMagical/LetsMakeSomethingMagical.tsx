import React, { FC, ReactNode } from "react";
import lets from "../../assets/Let's.svg";
import make from "../../assets/Make.svg";
import something from "../../assets/Something.svg";
import magical from "../../assets/Magical.svg";
import Image from "next/image";
import "./LetsMakeSomethingMagical.scss";

interface LetsMakeSomethingMagicalProps {}

const LetsMakeSomethingMagical: FC<LetsMakeSomethingMagicalProps> = ({}) => {
	return (
		<>
			<p className="text-[15vw] ml-[20vw]">Let&apos;s</p>
			<p className="text-[15vw] text-right mr-[20vw]">Make</p>
			<p className="text-[15vw] text-center">Something</p>

			<svg
				className="w-full h-full px-4 mt-4"
				id="fullText"
                aria-label="Magical"
				width="1110"
				height="249"
				viewBox="0 0 1110 249"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M1079.14 183.272C1076.56 186.649 1072.98 189.729 1068.41 192.51C1064.04 195.291 1058.28 196.682 1051.13 196.682C1043.98 196.682 1037.92 194.397 1032.95 189.828C1027.98 185.259 1025.5 178.802 1025.5 170.458C1025.5 168.869 1025.7 166.286 1026.1 162.71L1045.47 55.43C1049.04 35.762 1053.91 21.756 1060.07 13.412C1066.43 5.06799 1074.77 0.895996 1085.1 0.895996C1092.25 0.895996 1098.11 3.57799 1102.68 8.94198C1107.45 14.306 1109.84 22.4513 1109.84 33.378C1109.84 44.3047 1105.56 59.9 1097.02 80.164C1088.68 100.428 1084.51 115.229 1084.51 124.566H1079.14C1079.14 114.037 1083.31 99.0373 1091.66 79.568C1100 59.9 1104.17 44.2053 1104.17 32.484C1104.17 25.332 1102.48 19.1733 1099.11 14.008C1095.93 8.84265 1091.96 6.25998 1087.19 6.25998C1086.99 11.4253 1083.51 34.6693 1076.76 75.992C1070.2 117.116 1063.65 155.359 1057.09 190.722C1062.65 190.722 1067.82 187.841 1072.59 182.08C1077.35 176.319 1080.73 170.557 1082.72 164.796L1086 155.856L1091.36 158.24C1090.76 161.021 1089.17 165.094 1086.59 170.458C1084.21 175.623 1081.72 179.895 1079.14 183.272Z"
					fill="transparent"
					stroke="#141414"
					strokeWidth={2}
				/>
				<path
					d="M985.458 196.682C967.975 196.682 958.439 189.033 956.85 173.736C948.108 189.033 937.082 196.682 923.772 196.682C910.461 196.682 899.832 192.709 891.886 184.762C884.138 176.617 880.264 165.293 880.264 150.79C880.264 128.142 885.826 110.361 896.952 97.448C908.077 84.5347 922.48 78.078 940.162 78.078C954.664 78.078 964.3 84.932 969.068 98.64C970.061 92.68 971.154 86.72 972.346 80.76C987.047 80.76 997.974 80.164 1005.13 78.972L1009 78.078L988.438 190.722C994.398 190.126 999.364 187.345 1003.34 182.378L1007.81 185.954C1001.85 193.106 994.398 196.682 985.458 196.682ZM913.938 165.988C913.938 174.928 915.03 181.186 917.216 184.762C919.6 188.139 923.176 189.828 927.944 189.828C932.712 189.828 937.579 187.245 942.546 182.08C949.102 175.325 954.366 166.783 958.34 156.452C958.936 153.869 960.028 147.711 961.618 137.976C963.406 128.043 964.896 119.897 966.088 113.54C965.492 105.991 963.406 99.4347 959.83 93.872C956.254 88.3093 951.784 85.528 946.42 85.528C936.685 85.528 928.838 94.2693 922.878 111.752C916.918 129.036 913.938 147.115 913.938 165.988Z"
					fill="transparent"
					stroke="#141414"
					strokeWidth={2}
				/>
				<path
					d="M831.31 131.718C827.138 127.546 825.052 122.48 825.052 116.52C825.052 110.56 827.138 105.494 831.31 101.322C835.482 96.9513 840.548 94.766 846.508 94.766C848.296 94.766 850.581 95.1633 853.362 95.958C849.587 89.0047 842.535 85.528 832.204 85.528C821.873 85.528 812.735 92.084 804.788 105.196C796.841 118.308 792.868 137.777 792.868 163.604C792.868 172.544 794.855 179.199 798.828 183.57C803 187.742 808.165 189.828 814.324 189.828C820.483 189.828 826.045 188.636 831.012 186.252C836.177 183.868 840.25 181.087 843.23 177.908C846.21 174.531 848.793 171.054 850.978 167.478C854.951 160.922 856.938 156.75 856.938 154.962L862.302 157.346C861.706 160.525 859.918 164.796 856.938 170.16C853.958 175.325 850.68 179.597 847.104 182.974C843.528 186.351 838.263 189.53 831.31 192.51C824.357 195.291 816.609 196.682 808.066 196.682C791.974 196.682 779.756 192.907 771.412 185.358C763.267 177.61 759.194 167.081 759.194 153.77C759.194 130.129 765.055 111.653 776.776 98.342C788.696 84.8327 804.788 78.078 825.052 78.078C838.76 78.078 849.289 81.5547 856.64 88.508C863.991 95.4613 867.666 104.6 867.666 115.924C867.666 123.076 865.481 128.539 861.11 132.314C856.938 136.089 851.971 137.976 846.21 137.976C840.449 137.976 835.482 135.89 831.31 131.718Z"
					fill="transparent"
					stroke="#141414"
					strokeWidth={2}
				/>
				<path
					d="M742.45 185.954C736.49 193.106 729.04 196.682 720.1 196.682C711.16 196.682 704.108 194.397 698.942 189.828C693.976 185.259 691.492 179.299 691.492 171.948C691.492 169.365 693.082 158.538 696.26 139.466L706.094 86.124H693.578L694.174 80.76H706.988C721.69 80.76 732.517 80.164 739.47 78.972L743.642 78.078L723.08 190.722C729.04 190.126 734.007 187.345 737.98 182.378L742.45 185.954ZM716.226 49.47C712.054 45.298 709.968 40.232 709.968 34.272C709.968 28.312 712.054 23.246 716.226 19.074C720.398 14.7033 725.464 12.518 731.424 12.518C737.384 12.518 742.45 14.7033 746.622 19.074C750.993 23.246 753.178 28.312 753.178 34.272C753.178 40.232 750.993 45.298 746.622 49.47C742.45 53.642 737.384 55.728 731.424 55.728C725.464 55.728 720.398 53.642 716.226 49.47Z"
					fill="transparent"
					stroke="#141414"
					strokeWidth={2}
				/>
				<path
					d="M646.839 226.482C653.991 226.482 660.149 223.701 665.315 218.138L669.487 221.714C664.719 228.469 657.17 231.846 646.839 231.846C642.468 231.846 637.998 231.349 633.429 230.356C619.919 242.673 602.636 248.832 581.577 248.832C569.061 248.832 559.326 246.647 552.373 242.276C545.618 238.104 542.241 232.541 542.241 225.588C542.241 218.833 544.327 213.37 548.499 209.198C552.87 205.225 560.518 203.238 571.445 203.238C582.371 203.238 596.775 207.708 614.655 216.648L623.893 167.18C614.953 183.669 603.43 191.914 589.325 191.914C562.306 191.914 548.797 178.603 548.797 151.982C548.797 129.731 554.36 111.851 565.485 98.342C576.809 84.8327 591.212 78.078 608.695 78.078C618.827 78.078 626.674 81.1573 632.237 87.316C633.826 89.104 635.415 91.786 637.005 95.362L639.687 80.76C654.388 80.76 665.116 80.164 671.871 78.972L675.745 78.078L656.077 188.04C653.097 203.536 647.137 216.052 638.197 225.588C640.78 226.184 643.66 226.482 646.839 226.482ZM582.471 161.22C582.471 170.359 583.365 176.517 585.153 179.696C586.941 182.676 590.318 184.166 595.285 184.166C600.252 184.166 605.318 181.484 610.483 176.12C615.648 170.756 619.324 165.789 621.509 161.22C623.893 156.452 625.88 151.883 627.469 147.512L633.727 113.242V111.156C633.727 92.8787 625.383 83.74 608.695 83.74C602.337 83.74 596.377 92.382 590.815 109.666C585.252 126.95 582.471 144.135 582.471 161.22ZM580.385 242.872C596.278 242.872 607.006 236.018 612.569 222.31L608.397 220.224C606.013 219.032 604.523 218.237 603.927 217.84C603.529 217.641 602.238 217.045 600.053 216.052C597.868 215.059 596.278 214.363 595.285 213.966C594.292 213.767 592.702 213.271 590.517 212.476C588.53 211.681 586.842 211.085 585.451 210.688C584.06 210.489 582.471 210.191 580.683 209.794C577.703 209.198 573.332 208.9 567.571 208.9C561.81 208.9 557.141 210.291 553.565 213.072C550.187 215.853 548.499 219.926 548.499 225.29C548.499 230.654 551.38 234.925 557.141 238.104C562.902 241.283 570.65 242.872 580.385 242.872Z"
					fill="transparent"
					stroke="#141414"
					strokeWidth={2}
				/>
				<path
					d="M509.647 196.682C492.164 196.682 482.628 189.033 481.039 173.736C472.298 189.033 461.272 196.682 447.961 196.682C434.65 196.682 424.022 192.709 416.075 184.762C408.327 176.617 404.453 165.293 404.453 150.79C404.453 128.142 410.016 110.361 421.141 97.448C432.266 84.5347 446.67 78.078 464.351 78.078C478.854 78.078 488.489 84.932 493.257 98.64C494.25 92.68 495.343 86.72 496.535 80.76C511.236 80.76 522.163 80.164 529.315 78.972L533.189 78.078L512.627 190.722C518.587 190.126 523.554 187.345 527.527 182.378L531.997 185.954C526.037 193.106 518.587 196.682 509.647 196.682ZM438.127 165.988C438.127 174.928 439.22 181.186 441.405 184.762C443.789 188.139 447.365 189.828 452.133 189.828C456.901 189.828 461.768 187.245 466.735 182.08C473.291 175.325 478.556 166.783 482.529 156.452C483.125 153.869 484.218 147.711 485.807 137.976C487.595 128.043 489.085 119.897 490.277 113.54C489.681 105.991 487.595 99.4347 484.019 93.872C480.443 88.3093 475.973 85.528 470.609 85.528C460.874 85.528 453.027 94.2693 447.067 111.752C441.107 129.036 438.127 147.115 438.127 165.988Z"
					fill="transparent"
					stroke="#141414"
					strokeWidth={2}
				/>
				<path
					d="M378.718 223.502C371.169 231.051 361.335 234.826 349.216 234.826C337.296 234.826 327.76 230.853 320.608 222.906C313.456 215.158 309.88 204.927 309.88 192.212C309.88 179.299 312.165 164.498 316.734 147.81L330.144 103.706C313.456 124.765 298.159 144.929 284.252 164.2C256.836 202.145 238.261 227.575 228.526 240.488L223.162 238.998L211.54 94.766L187.7 138.274C165.052 180.987 146.079 209.099 130.782 222.608C115.683 236.316 95.5187 243.17 70.288 243.17C48.832 243.17 31.0513 235.521 16.946 220.224C5.82066 207.708 0.257996 192.709 0.257996 175.226C0.257996 172.047 0.456662 168.769 0.853996 165.392L6.814 165.988C6.41666 169.167 6.218 172.246 6.218 175.226C6.218 191.318 11.284 204.927 21.416 216.052C34.3293 230.157 50.62 237.21 70.288 237.21C93.9293 237.21 113.001 230.555 127.504 217.244C142.007 204.132 160.284 176.915 182.336 135.592L235.976 38.146C214.917 37.7486 194.455 34.4706 174.588 28.312C154.92 21.9547 137.239 18.776 121.544 18.776C106.048 18.776 93.0353 24.2393 82.506 35.166C71.9767 46.0927 66.712 60.198 66.712 77.482H60.752C60.752 58.41 66.5133 42.914 78.036 30.994C89.7573 18.8753 104.856 12.816 123.332 12.816C138.232 12.816 155.913 16.094 176.376 22.65C197.037 29.0073 219.288 32.186 243.128 32.186L255.644 193.106L261.604 184.762C303.523 127.149 335.905 86.0247 358.752 61.39C381.599 36.5566 400.075 24.14 414.18 24.14V30.1C408.021 30.1 400.174 33.4773 390.638 40.232C389.247 44.6026 384.579 59.8007 376.632 85.826C368.685 111.653 361.533 134.301 355.176 153.77C349.017 173.041 345.938 188.835 345.938 201.152C345.938 213.469 348.123 222.608 352.494 228.568C356.666 228.568 360.54 227.674 364.116 225.886C367.891 224.297 370.672 222.608 372.46 220.82L374.844 218.436L378.718 223.502Z"
					fill="transparent"
					stroke="#141414"
					strokeWidth={2}
				/>
			</svg>
            
		</>
	);
};

export default LetsMakeSomethingMagical;
