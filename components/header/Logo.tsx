import React from "react";
import styles from "./styles.module.scss";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <svg width="104px" height="39px" viewBox="0 0 384 147">
        <path
          d="M179.6937,133.7743 C183.5347,133.7743 187.8667,132.6183 192.6867,130.3013 C177.2477,139.9343 164.6047,145.2123 154.7557,146.1383 C153.1477,146.3243 151.6117,146.4153 150.1447,146.4153 C142.5297,146.4153 136.2247,143.9843 131.2317,139.1223 C126.2357,134.2593 122.5867,127.3153 120.2807,118.2863 C117.9767,109.2553 116.5777,99.4623 116.0897,88.9053 C115.8097,81.9613 115.6717,75.1533 115.6717,68.4853 C115.6717,65.2443 115.7057,62.0043 115.7757,58.7613 L115.7757,53.6213 C115.7757,50.1963 115.7397,47.0013 115.6717,44.0363 C115.6717,42.8343 114.9897,41.9763 113.6277,41.4663 C112.2657,40.9583 110.5707,40.7023 108.5457,40.7023 L106.5547,40.7023 C105.2267,40.7023 103.7257,40.7723 102.0487,40.9113 C100.3727,41.0493 98.8707,41.2583 97.5437,41.5363 L95.4477,41.8143 L103.6207,37.9243 C109.1387,35.3323 115.4787,31.9753 122.6387,27.8533 C129.7987,23.7333 136.2767,19.3093 142.0757,14.5863 C147.8747,9.8633 151.3657,5.3733 152.5547,1.1113 C152.6937,0.3723 152.7987,0.0003 152.8687,0.0003 C153.0087,0.0003 153.0787,0.4653 153.0787,1.3893 C153.0787,2.6883 152.9377,5.0953 152.6597,8.6133 C152.3507,12.9863 152.0847,18.3433 151.8597,24.6613 C152.2417,26.3113 154.0827,30.1083 162.9557,29.8863 C174.6477,29.5943 175.6887,29.3943 175.6887,29.3943 C175.6887,29.3943 167.8807,36.0913 151.4097,40.8533 L151.4127,40.7503 C151.4097,40.8063 151.4087,40.8433 151.4097,40.8543 C151.4097,45.9103 151.1137,44.8413 151.2197,50.2013 C151.1787,50.2133 151.2637,50.8823 151.2227,50.8943 L151.2017,51.6543 C151.1487,53.1673 151.1607,55.0343 151.2167,57.0713 C151.4677,66.2823 152.6077,79.0433 152.6077,79.0433 C153.4097,89.9703 155.2087,100.2963 158.0037,110.0203 C160.7967,119.7443 164.9877,126.6893 170.5777,130.8573 C173.2317,132.8023 176.2697,133.7743 179.6937,133.7743 M383.3147,130.7863 L383.3147,131.8583 C383.3147,135.4323 382.7307,138.2903 381.5627,140.4333 C380.2927,142.7563 378.7067,144.4083 376.8017,145.3903 C374.8977,146.3743 373.0817,146.8643 371.3557,146.8643 C371.0507,146.9253 370.7207,146.9543 370.3647,146.9543 C368.4357,146.9543 366.3537,146.2393 364.1197,144.8103 C361.5287,143.2633 359.7517,140.1063 358.7877,135.3423 C358.6847,134.5693 358.6347,133.8233 358.6347,133.1083 C358.6347,129.7143 359.7017,126.7973 361.8337,124.3553 C364.4237,121.3183 367.4707,119.7403 370.9747,119.6213 C374.6307,119.6213 377.5257,120.6923 379.6587,122.8373 C381.7917,124.9803 383.0097,127.6313 383.3147,130.7863 M290.8147,73.4863 C290.8147,70.8013 290.9537,68.1163 291.2337,65.4293 C292.4907,53.0203 296.2637,43.2513 302.5497,36.1183 C308.6967,38.1573 312.9927,42.0703 315.4387,47.8563 C317.8827,53.6453 319.1057,59.5493 319.1057,65.5683 C319.1057,66.9573 319.0357,68.3943 318.8967,69.8743 C318.1967,77.5623 315.9447,84.3903 312.1377,90.3643 C308.3297,96.3383 303.0037,99.8343 296.1587,100.8523 C292.5957,92.0553 290.8147,82.9323 290.8147,73.4863 M318.2677,122.5223 C308.1377,118.9103 300.8737,111.9663 296.4727,101.6853 C299.4067,101.9643 302.2707,102.1023 305.0657,102.1023 C316.3107,102.1023 325.9507,99.9733 333.9847,95.7123 C344.0447,90.5263 350.3477,84.7863 352.8987,78.4863 C355.4477,72.1903 356.7237,67.0513 356.7237,63.0673 C356.7237,58.1603 355.5347,53.2043 353.1607,48.2033 C351.3427,44.3143 347.5027,40.5643 341.6337,36.9513 C335.7667,33.3403 327.8377,31.5343 317.8487,31.5343 L316.3817,31.5343 C308.0677,32.0903 302.7947,32.9233 300.5587,34.0353 C287.6347,38.3893 277.5587,44.2233 270.3297,51.5373 C263.0997,58.8543 258.5927,65.8933 256.8127,72.6533 C255.0307,79.4133 254.1397,85.1543 254.1397,89.8783 C254.1397,93.7673 254.5587,97.6113 255.3987,101.4083 C257.5627,111.1323 261.8057,119.6983 268.1287,127.1063 C269.0937,128.2373 270.0637,129.2983 271.0377,130.3043 C266.2207,132.6193 261.8907,133.7743 258.0517,133.7743 C254.6277,133.7743 251.5897,132.8023 248.9347,130.8573 C243.3457,126.6893 239.1547,119.7443 236.3617,110.0203 C233.5667,100.2973 231.7677,89.9703 230.9657,79.0433 C230.9657,79.0433 229.2657,60.0103 229.5597,51.6543 L229.5807,50.8943 C246.0517,46.1323 253.8597,39.4353 253.8597,39.4353 C253.8597,39.4353 252.8177,39.6343 241.1267,39.9273 C229.8107,40.2103 230.1717,34.5803 230.1717,34.5803 L230.1717,25.9683 C230.4057,19.0713 230.6877,13.2873 231.0177,8.6133 C231.2957,5.0953 231.4367,2.6883 231.4367,1.3893 C231.4367,0.4663 231.3667,0.0003 231.2267,0.0003 C231.1567,0.0003 231.0517,0.3723 230.9127,1.1123 C229.7237,5.3733 226.2317,9.8633 220.4337,14.5873 C214.6347,19.3093 208.1567,23.7333 200.9967,27.8533 C193.8357,31.9753 187.4967,35.3323 181.9787,37.9243 L173.8057,41.8143 L175.9017,41.5363 C177.2287,41.2583 178.7307,41.0503 180.4067,40.9113 C182.0827,40.7723 183.5847,40.7023 184.9127,40.7023 L186.9037,40.7023 C188.9287,40.7023 190.6237,40.9583 191.9857,41.4663 C193.3477,41.9763 194.0287,42.8343 194.0287,44.0363 C194.0977,47.0013 194.1337,50.1963 194.1337,53.6213 L194.1337,58.7613 C194.0627,62.0043 194.0287,65.2443 194.0287,68.4853 C194.0287,75.1533 194.1677,81.9613 194.4477,88.9053 C194.9357,99.4633 196.3337,109.2563 198.6387,118.2863 C200.9447,127.3153 204.5937,134.2593 209.5897,139.1223 C214.5827,143.9843 220.8877,146.4153 228.5017,146.4153 C229.9697,146.4153 231.5057,146.3243 233.1127,146.1383 C242.9617,145.2133 255.6027,139.9353 271.0387,130.3043 C276.4447,135.8883 281.9887,139.5503 287.6707,141.2763 C294.3767,143.3133 299.8607,144.3333 304.1217,144.3333 C310.0587,144.3333 316.3107,143.1753 322.8787,140.8593 C334.2637,136.8783 346.0347,128.4053 358.1897,115.4373 C346.7327,121.2713 336.8147,124.1893 328.4317,124.1893 C324.7277,124.1893 321.3407,123.6343 318.2677,122.5223 M36.6737,73.4863 C36.6737,70.8013 36.8137,68.1163 37.0927,65.4293 C38.3497,53.0203 42.1227,43.2513 48.4097,36.1183 C54.5557,38.1573 58.8517,42.0703 61.2977,47.8563 C63.7427,53.6453 64.9657,59.5493 64.9657,65.5683 C64.9657,66.9573 64.8947,68.3943 64.7557,69.8743 C64.0567,77.5623 61.8047,84.3903 57.9967,90.3643 C54.1897,96.3383 48.8627,99.8343 42.0187,100.8523 C38.4557,92.0553 36.6737,82.9323 36.6737,73.4863 M64.1267,122.5223 C53.9977,118.9103 46.7327,111.9663 42.3317,101.6853 C45.2667,101.9643 48.1297,102.1023 50.9247,102.1023 C62.1707,102.1023 71.8107,99.9733 79.8447,95.7123 C89.9037,90.5263 96.2077,84.7863 98.7577,78.4863 C101.3067,72.1903 102.5827,67.0513 102.5827,63.0673 C102.5827,58.1603 101.3947,53.2043 99.0207,48.2033 C97.2027,44.3143 93.3617,40.5643 87.4937,36.9513 C81.6267,33.3403 73.6967,31.5343 63.7077,31.5343 L62.2417,31.5343 C53.9277,32.0903 48.6537,32.9233 46.4187,34.0353 C33.4937,38.3893 23.4187,44.2233 16.1897,51.5373 C8.9587,58.8543 4.4527,65.8933 2.6717,72.6533 C0.8907,79.4133 -0.0003,85.1543 -0.0003,89.8783 C-0.0003,93.7673 0.4187,97.6113 1.2577,101.4083 C3.4217,111.1323 7.6647,119.6983 13.9887,127.1063 C20.3097,134.5163 26.8247,139.2393 33.5307,141.2763 C40.2367,143.3133 45.7207,144.3333 49.9817,144.3333 C55.9177,144.3333 62.1707,143.1753 68.7377,140.8593 C80.1227,136.8783 91.8947,128.4053 104.0497,115.4373 C92.5927,121.2713 82.6737,124.1893 74.2907,124.1893 C70.5877,124.1893 67.2007,123.6343 64.1267,122.5223"
          id="Fill-1"
          fill="#010202"
        ></path>
      </svg>
    </div>
  );
}
