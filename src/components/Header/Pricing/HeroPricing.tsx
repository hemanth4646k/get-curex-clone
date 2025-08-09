import { Link } from "react-router-dom";
import InsurancePartnersCommon from "../../../common/InsurancePartners";
import DescCard from "../../../common/ui/DescCard";
import Hero from "../../../common/ui/Hero";
import ComparisonTable from "../../../common/ui/ComparisonTable";
import Faq from "../../../common/ui/Faq";

import './Table2.css';

export const Table2 = () => {
  return (
    <div className="table-container">
      <table className="table_component">
        <thead className="table_head">
          <tr className="table_row is-header">
            <th className="table_row-header"></th>
            <th className="table_header is-yellow">Insurance</th>
            <th className="table_header">Self-Pay</th>
          </tr>
        </thead>
        <tbody className="table_body">
          <tr className="table_row">
            <td className="table_row-header">
              <div className="prices-pricing_icon w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                  <g clipPath="url(#clip0_10673_17618)">
                    <path d="M43.4756 36.5532C43.4333 37.5635 43.2093 38.5539 42.8137 39.482L41.3779 38.0437C41.4451 37.8123 41.4998 37.5784 41.5421 37.342C41.7512 36.1476 41.6218 34.9159 41.1639 33.7936L31.0611 8.94222C30.8347 8.38482 30.4763 7.6607 30.0384 7.27003C29.6004 6.87687 29.2346 6.69024 28.3015 7.06847C27.3684 7.44919 27.239 7.83738 27.2016 8.42215C27.1593 9.00691 27.4057 9.77831 27.6346 10.3357L31.8151 20.6226L30.1006 21.3194L24.1808 6.75494C23.7353 5.65756 23.2576 5.08524 22.8769 4.85382C22.4961 4.61991 22.1104 4.60249 21.4236 4.88368C20.6373 5.20219 20.381 5.55554 20.2641 5.94373C20.1645 6.39661 20.2118 6.8694 20.4059 7.28994L25.9774 20.9984L24.2629 21.6951L17.9947 6.27219C17.9051 6.04575 17.7682 5.83921 17.599 5.66254C17.4273 5.49084 17.2208 5.35149 16.9943 5.25694C16.7704 5.16487 16.5265 5.1151 16.2827 5.1151C16.0388 5.1151 15.7949 5.16735 15.5685 5.26191C15.3421 5.35149 15.138 5.48587 14.9613 5.65756C14.7896 5.82677 14.6503 6.03331 14.5582 6.25726C14.4637 6.48121 14.4114 6.72259 14.4114 6.96645C14.4114 7.21031 14.4587 7.44919 14.5508 7.67563L21.1673 23.9546L19.4553 24.6513L14.2322 11.7964C13.9759 11.1693 13.6077 10.8782 13.1722 10.7289C12.7293 10.5895 12.2515 10.6069 11.8185 10.7811C11.0372 11.0971 10.3006 11.9681 10.6913 13.1426L19.1119 33.8633C19.1891 34.0399 19.209 34.239 19.1692 34.4281C19.1294 34.6173 19.0298 34.7939 18.888 34.9258C18.7437 35.0552 18.562 35.1373 18.3704 35.1597C18.1763 35.1821 17.9797 35.1398 17.813 35.0452L11.4776 31.6636L11.4378 31.6461C10.3131 31.146 9.05891 31.6586 8.54133 32.8853L8.5264 32.9252C7.99887 34.0549 8.50649 35.3339 9.74819 35.8589C9.78054 35.8789 9.80543 35.8988 9.83529 35.9162L24.9596 44.6504L24.9994 44.6678C25.6066 45.0386 26.2735 45.2973 26.9727 45.4367C27.0847 45.4591 27.1992 45.4815 27.3111 45.4939V47.3403C26.159 47.2134 25.0492 46.8377 24.0563 46.2404L9.02905 37.5884L8.94445 37.5311C6.89154 36.598 5.92108 34.2067 6.85919 32.1687C6.85919 32.1612 6.84675 32.1413 6.84675 32.1413C7.76247 30.0337 10.2061 29.0109 12.2664 29.969C12.2838 29.9814 12.3013 29.9963 12.3162 30.0113L16.4718 32.2234L8.97431 13.7746C8.23526 11.6396 9.53668 9.70863 11.1442 9.05668C11.7563 8.83024 12.4182 8.76554 13.0627 8.86756L12.8562 8.35994C12.1893 6.71512 12.784 4.39596 14.8917 3.53996C15.6008 3.25379 16.3797 3.19407 17.1212 3.37075C17.8653 3.54991 18.5346 3.96049 19.0298 4.54028C19.4479 3.92814 20.0351 3.45286 20.7194 3.16919C21.7471 2.75114 22.8644 2.72626 23.7851 3.26375C24.7058 3.80124 25.3578 4.75677 25.8853 6.05819L26.0918 6.56582C26.475 6.0358 26.9976 5.61775 27.5998 5.36394C29.0654 4.76673 30.4291 5.16238 31.2552 5.9064C32.0789 6.65291 32.5093 7.61591 32.7756 8.25045L42.8734 33.0993C43.3188 34.1942 43.5229 35.3737 43.4756 36.5557V36.5532Z" fill="black"></path>
                    <path d="M27.563 47.614L27.2868 47.5841C26.0899 47.4522 24.9601 47.0715 23.9299 46.4494L8.90515 37.7998L8.82303 37.7476C7.74557 37.2524 6.92689 36.3765 6.5188 35.2766C6.13808 34.2564 6.16296 33.159 6.58599 32.1711L6.57106 32.1438L6.61833 32.0417C7.09859 30.9369 8.01182 30.061 9.12661 29.6355C10.1991 29.2299 11.3512 29.2672 12.3715 29.7425L12.4113 29.7649C12.4287 29.7773 12.4461 29.7898 12.461 29.8047L15.9821 31.6809L8.74589 13.8667C7.96206 11.6097 9.30578 9.53192 11.0526 8.82273C11.5752 8.62864 12.1276 8.54652 12.6775 8.5739L12.6278 8.45197C11.9136 6.6902 12.5432 4.22422 14.8001 3.30601C15.5615 2.99745 16.3852 2.93524 17.1815 3.12685C17.8807 3.29606 18.5078 3.64692 19.0104 4.14957C19.4384 3.61457 19.9933 3.19901 20.6279 2.93773C21.8049 2.45747 22.9719 2.49729 23.915 3.04722C24.8307 3.58222 25.5325 4.50789 26.1222 5.96359L26.1695 6.08055C26.5403 5.67245 26.9956 5.34896 27.5082 5.13248C29.1705 4.45564 30.6212 4.99313 31.4274 5.71973C32.2312 6.44882 32.6791 7.35957 33.01 8.15336L43.1078 33.0047C43.5682 34.1394 43.7772 35.3388 43.7274 36.5631C43.6851 37.6082 43.4562 38.6235 43.0456 39.579L42.9013 39.9174L41.0997 38.1134L41.142 37.9715C41.2042 37.7575 41.2565 37.5311 41.2988 37.2972C41.5003 36.1426 41.3759 34.9631 40.9355 33.8856L30.8327 9.03673C30.5341 8.30266 30.1957 7.74278 29.8747 7.45662C29.5139 7.13562 29.2501 6.95396 28.3991 7.29985C27.548 7.64573 27.4858 7.95927 27.4535 8.43952C27.4112 9.02678 27.6949 9.82057 27.869 10.2436L32.1441 20.7619L29.9692 21.6453L23.9548 6.84945C23.4621 5.63264 22.9893 5.20961 22.7529 5.06778C22.4693 4.89359 22.1806 4.84631 21.5212 5.11506C20.7772 5.41615 20.593 5.7272 20.5059 6.01585C20.4238 6.39657 20.4661 6.81959 20.6353 7.18787L26.3039 21.1377L24.129 22.0211L17.7687 6.3692C17.6916 6.1751 17.5722 5.99345 17.4253 5.83917C17.276 5.68987 17.0994 5.57043 16.9028 5.48831C16.5171 5.32906 16.0717 5.32408 15.671 5.49329C15.472 5.57292 15.2953 5.68738 15.141 5.83668C14.9942 5.9835 14.8723 6.16017 14.7926 6.35178C14.708 6.55085 14.6657 6.75738 14.6657 6.96641C14.6657 7.17543 14.7055 7.38445 14.7852 7.58103L21.4938 24.0914L19.3215 24.9748L14.0038 11.8909C13.8023 11.3982 13.5236 11.112 13.0956 10.9652C12.7124 10.8458 12.2918 10.8607 11.9136 11.0125C11.2069 11.2987 10.5972 12.0626 10.9307 13.0654L19.3464 33.7712C19.4409 33.9901 19.4683 34.2365 19.4185 34.4803C19.3688 34.7192 19.2443 34.9432 19.0652 35.1099C18.881 35.2766 18.6471 35.3811 18.4058 35.4085C18.1594 35.4384 17.9155 35.3861 17.6966 35.2642L11.3438 31.8775C10.8735 31.6685 10.3608 31.6536 9.90299 31.8352C9.4078 32.0318 9.00717 32.4399 8.77575 32.9848L8.7658 33.0147C8.53687 33.5049 8.51448 34.02 8.69364 34.4853C8.88773 34.9905 9.29831 35.3986 9.85073 35.6325L9.88308 35.6499C9.90796 35.6648 9.93036 35.6797 9.95275 35.6947L9.97764 35.7121L25.1318 44.4587C25.7141 44.8146 26.3511 45.0634 27.023 45.1953C27.13 45.2152 27.2395 45.2376 27.344 45.25L27.5605 45.2774V47.619L27.563 47.614ZM7.1185 32.1487L7.12845 32.1811L7.08615 32.2707C6.67308 33.164 6.63824 34.1693 6.98413 35.1024C7.34992 36.0829 8.0815 36.8642 9.04699 37.3022L9.08182 37.3221L9.16643 37.3793L24.1813 46.0239C25.0746 46.5614 26.0426 46.9073 27.0628 47.0566V45.7054C27.018 45.6979 26.9707 45.688 26.9259 45.678C26.2018 45.5337 25.515 45.2675 24.8855 44.8867L24.8382 44.8643L9.66908 36.1003C9.66908 36.1003 9.64669 36.0854 9.63424 36.0779C8.96487 35.7892 8.46471 35.2866 8.22582 34.6595C7.99689 34.0648 8.02675 33.4104 8.30296 32.8181L8.31043 32.7982C8.59659 32.1189 9.09427 31.6162 9.71636 31.3699C10.3011 31.1385 10.9481 31.1559 11.5428 31.4197L11.5802 31.4371L17.933 34.8287C18.0624 34.9009 18.2017 34.9332 18.346 34.9158C18.4854 34.9009 18.6198 34.8387 18.7268 34.7441C18.8288 34.6496 18.9009 34.5202 18.9283 34.3833C18.9582 34.2415 18.9432 34.0971 18.886 33.9677L10.4654 13.2321C10.0274 11.9108 10.8162 10.9155 11.7295 10.5472C12.2147 10.3531 12.7547 10.3332 13.2498 10.4899C13.8247 10.6865 14.2079 11.0697 14.4642 11.6993L19.5927 24.3228L20.8444 23.8152L14.3248 7.76269C14.2203 7.50887 14.1681 7.23764 14.1681 6.96143C14.1681 6.68522 14.2228 6.41399 14.3348 6.1552C14.4393 5.90636 14.5961 5.66996 14.7926 5.47587C14.9942 5.27929 15.2256 5.12999 15.4819 5.02796C15.9945 4.81147 16.5843 4.81396 17.0944 5.02547C17.3507 5.13248 17.5821 5.28924 17.7787 5.48582C17.9778 5.68987 18.1295 5.92378 18.2316 6.17759L24.4052 21.3666L25.6594 20.859L20.1825 7.38196C19.9734 6.9241 19.9187 6.39159 20.0282 5.88894C20.1999 5.3191 20.5881 4.9558 21.3371 4.65222C22.0711 4.35361 22.5414 4.35113 23.0142 4.64227C23.3676 4.85627 23.9001 5.38131 24.4202 6.66282L30.2454 20.9983L31.4996 20.4882L27.4137 10.4302C27.2246 9.96987 26.9135 9.09148 26.9633 8.40469C27.0106 7.70048 27.2246 7.24262 28.2174 6.83701C29.2128 6.43389 29.6856 6.61306 30.2131 7.08336C30.6933 7.51385 31.0691 8.28027 31.3005 8.84762L41.4008 33.699C41.8761 34.8636 42.0105 36.1376 41.794 37.3843C41.7591 37.5858 41.7144 37.7824 41.6646 37.9691L42.7321 39.0366C43.0307 38.2378 43.1999 37.3992 43.2372 36.5407C43.2845 35.3861 43.0879 34.2589 42.655 33.1889L32.5472 8.34248C32.3456 7.85724 31.9201 6.84199 31.0915 6.08801C30.3972 5.46343 29.1431 5.00308 27.6973 5.59034C27.1375 5.82922 26.6547 6.21492 26.2989 6.70762L26.0376 7.07092L25.6619 6.14773C25.1144 4.79903 24.4799 3.9505 23.6662 3.47273C22.8599 3.00243 21.8497 2.97506 20.8195 3.3931C20.18 3.65687 19.635 4.0998 19.2419 4.67461L19.0577 4.94087L18.8462 4.69452C18.3809 4.14957 17.7638 3.77382 17.067 3.60461C16.3728 3.43789 15.6536 3.49264 14.9892 3.76138C13.0159 4.56264 12.4685 6.72006 13.0906 8.25787L13.4638 9.17359L13.0284 9.10392C12.4262 9.00936 11.8066 9.06908 11.2343 9.28059C9.70889 9.9002 8.53189 11.7192 9.21371 13.685L16.965 32.7584L12.1425 30.178C11.2517 29.7699 10.2464 29.74 9.30827 30.0958C8.34775 30.4591 7.55645 31.2032 7.1185 32.1438V32.1487Z" fill="black"></path>
                    <path d="M24.0885 34.2343C22.2214 34.2343 20.7031 32.7161 20.7031 30.8489C20.7031 28.9817 22.2214 27.4635 24.0885 27.4635C25.9557 27.4635 27.474 28.9817 27.474 30.8489C27.474 32.7161 25.9557 34.2343 24.0885 34.2343ZM24.0885 30.0677C23.6589 30.0677 23.3073 30.4192 23.3073 30.8489C23.3073 31.2786 23.6589 31.6302 24.0885 31.6302C24.5182 31.6302 24.8698 31.2786 24.8698 30.8489C24.8698 30.4192 24.5182 30.0677 24.0885 30.0677Z" fill="black"></path>
                    <path d="M33.8542 40.7968C31.6302 40.7968 29.8203 38.9869 29.8203 36.763C29.8203 34.539 31.6302 32.7291 33.8542 32.7291C36.0781 32.7291 37.888 34.539 37.888 36.763C37.888 38.9869 36.0781 40.7968 33.8542 40.7968ZM33.8542 35.3333C33.0651 35.3333 32.4245 35.9739 32.4245 36.763C32.4245 37.552 33.0651 38.1927 33.8542 38.1927C34.6432 38.1927 35.2839 37.552 35.2839 36.763C35.2839 35.9739 34.6432 35.3333 33.8542 35.3333Z" fill="black"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_10673_17618">
                      <rect width="50" height="50" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div>Allergy Testing</div>
            </td>
            <td className="table_cell is-yellow">Insurance Copay</td>
            <td className="table_cell">$199</td>
          </tr>
          
          <tr className="table_row">
            <td className="table_row-header has-subrows">
              <div className="prices-pricing_icon w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                  <path d="M39.5261 36.8932C38.9188 35.91 38.2463 34.9687 37.513 34.0755L36.5182 32.901L35.5235 34.0755C34.791 34.9674 34.1185 35.907 33.5104 36.888C32.1198 39.1328 31.4141 41.0885 31.4141 42.6979C31.4124 43.3682 31.5427 44.0322 31.7976 44.6521C32.0526 45.2721 32.4271 45.8357 32.8998 46.3109C33.3726 46.7861 33.9343 47.1635 34.5529 47.4215C35.1715 47.6796 35.8349 47.8134 36.5052 47.8151C37.1755 47.8168 37.8396 47.6864 38.4595 47.4315C39.0794 47.1766 39.6431 46.8021 40.1182 46.3293C40.5934 45.8565 40.9708 45.2948 41.2289 44.6762C41.487 44.0576 41.6207 43.3942 41.6224 42.7239C41.6224 41.1041 40.9167 39.1406 39.5261 36.8932ZM36.5182 45.3125C35.8422 45.2961 35.2001 45.0131 34.7318 44.5253C34.2635 44.0375 34.0071 43.3844 34.0182 42.7083C34.0182 41.0052 35.4037 38.6458 36.5182 37.0703C37.6302 38.6484 39.0182 41.0156 39.0182 42.7343C39.0259 43.407 38.7675 44.0554 38.2992 44.5383C37.8309 45.0212 37.1908 45.2994 36.5182 45.3125Z" fill="currentColor"></path>
                  <path d="M36.1042 20.2344L18.6875 2.99219L9.14062 12.6276L26.5625 29.8802L37.7266 31.3854L36.1042 20.2344ZM27.7708 27.4141L23.7708 23.4531L28.0208 19.1589L26.1719 17.3359L21.9193 21.6146L19.5313 19.2708L23.4193 15.3411L21.5677 13.5182L17.6849 17.4323L12.8229 12.6172L18.7057 6.67448L33.6536 21.4714L34.6484 28.3411L27.7708 27.4141Z" fill="currentColor"></path>
                </svg>
              </div>
              <div>Treatment</div>
            </td>
            <td className="table_cell is-yellow"></td>
            <td className="table_cell"></td>
          </tr>
          
          <tr className="table_row">
            <td className="table_row-header is-subrow">
              <div className="table_bullet"></div>
              <div>Environmental Allergies</div>
            </td>
            <td className="table_cell is-subrow is-yellow">
              <div className="table_cell_pricing-wrapper">
                <div className="pricing-global">$59</div>
              </div>
              <div className="text-display-inline hide-mobile-portrait"><strong> / Month</strong></div>
              <div className="show-mobile-portrait text-display-inline"><strong> / Mo.</strong></div>
            </td>
            <td className="table_cell is-subrow">
              <div className="table_cell_pricing-wrapper">
                <div className="text-display-inline"><strong>$99</strong></div>
              </div>
              <div className="show-mobile-portrait text-display-inline"><strong> / Mo.</strong></div>
              <div className="text-display-inline hide-mobile-portrait"><strong> / Month</strong></div>
            </td>
          </tr>
          
          <tr className="table_row">
            <td className="table_row-header is-subrow">
              <div className="table_bullet"></div>
              <div>Food Allergies</div>
            </td>
            <td className="table_cell is-subrow is-yellow">
              <div className="table_cell_pricing-wrapper">
                <div className="pricing-global">$149</div>
              </div>
              <div className="text-display-inline hide-mobile-portrait">/ <strong>Month</strong></div>
              <div className="show-mobile-portrait text-display-inline"><strong> / Mo.</strong></div>
            </td>
            <td className="table_cell is-subrow">
              <div className="table_cell_pricing-wrapper">
                <div className="text-display-inline"><strong>$199 </strong></div>
              </div>
              <div className="show-mobile-portrait text-display-inline"><strong> / Mo.</strong></div>
              <div className="text-display-inline hide-mobile-portrait"><strong> / Month</strong></div>
            </td>
          </tr>
          
          <tr className="table_row">
            <td className="table_row-header is-subrow">
              <div className="table_bullet"></div>
              <div>Environmental + Food Allergies</div>
            </td>
            <td className="table_cell is-subrow is-yellow">
              <div className="table_cell_pricing-wrapper">
                <div className="text-display-inline"><strong>$179 </strong></div>
                <div className="text-display-inline hide-mobile-portrait">/ <strong>Month</strong></div>
              </div>
              <div className="show-mobile-portrait text-display-inline"><strong> / Mo.</strong></div>
            </td>
            <td className="table_cell is-subrow">
              <div className="table_cell_pricing-wrapper">
                <div className="text-display-inline"><strong>$239 </strong></div>
              </div>
              <div className="show-mobile-portrait text-display-inline"><strong> / Mo.</strong></div>
              <div className="text-display-inline hide-mobile-portrait"><strong> / Month</strong></div>
            </td>
          </tr>
          
          <tr className="table_row">
            <td className="table_row-header">
              <div className="prices-pricing_icon w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 50 50" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                  <path fillRule="evenodd" clipRule="evenodd" d="M44.6276 6.51038H5.21094V35.1015H23.6172V40.8515H26.2214V35.1015H44.6276V6.51038ZM7.8151 32.4974V9.11454H42.0234V32.4974H33.9011V30.7473C33.9011 28.3756 32.9589 26.101 31.2818 24.4239C30.5691 23.7112 29.7484 23.1312 28.8583 22.6998C30.1846 21.5898 31.0287 19.9242 31.0287 18.0598C31.0287 14.7119 28.3068 12.0052 24.9583 12.0052C21.6098 12.0052 18.888 14.7119 18.888 18.0598C18.888 19.9243 19.7321 21.5898 21.0585 22.6998C20.1683 23.1312 19.3477 23.7112 18.6349 24.4239C16.9579 26.101 16.0157 28.3756 16.0157 30.7473V32.4974H7.8151ZM18.6199 32.4974H31.2969V30.7473C31.2969 29.0663 30.6291 27.454 29.4404 26.2653C28.2517 25.0766 26.6395 24.4088 24.9584 24.4088C23.2773 24.4088 21.6651 25.0766 20.4764 26.2653C19.2877 27.454 18.6199 29.0663 18.6199 30.7473V32.4974ZM24.9583 14.6093C23.04 14.6093 21.4922 16.1582 21.4922 18.0598C21.4922 19.9615 23.04 21.5104 24.9583 21.5104C26.8767 21.5104 28.4245 19.9615 28.4245 18.0598C28.4245 16.1582 26.8767 14.6093 24.9583 14.6093ZM16.4245 43.4895H33.8724V40.8854H16.4245V43.4895Z" fill="currentColor"></path>
                </svg>
              </div>
              <div>Consultations</div>
            </td>
            <td className="table_cell is-yellow">Insurance Copay</td>
            <td className="table_cell">Included</td>
          </tr>
        </tbody>
      </table>
      
      <div className="promotion-note">
        <strong>Note:</strong> We currently have a promotion. By pre-paying for the year, you get two months free.
      </div>
    </div>
  );
};
import React from 'react';
import Testimonials from "../PlansPrevention/Testimonials";

interface DisclaimerProps {
  // You can add props here if needed for customization
}

const PricesDisclaimer: React.FC<DisclaimerProps> = () => {
  const containerStyle: React.CSSProperties = {
    gridColumnGap: '1rem',
    gridRowGap: '2rem',
    backgroundColor: '#e6e9fcff', // Light pink equivalent
    color: '#000000', // Black
    textAlign: 'center',
    borderRadius: '0.625rem',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    fontSize: '1rem',
    lineHeight: 1.2,
    display: 'flex',
    boxShadow: '0 12px 35px -4px rgba(0, 0, 0, 0.25)',
  };

  const headerStyle: React.CSSProperties = {
    marginTop: 0,
    fontSize: '2.75rem',
    fontWeight: 500,
    lineHeight: 1.3,
    opacity: 1,
    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d',
  };

  const italicTextStyle: React.CSSProperties = {
    fontStyle: 'italic',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>
        Read Before You Get an In-Lab Allergy Test
      </h2>
      <div style={italicTextStyle}>
        <em>
          Allergy testing is billed by our lab partners and not by Curex. Please verify your 
          insurance coverage with the lab before getting tested to avoid high co-pays. In rare 
          instances, labs might offer a cash option that can be more affordable than using insurance.
          <br /><br />
          If you prefer to self-pay for the test, Curex has negotiated a $199 cash price. Please 
          let us know before you order the test. If self-pay is not selected prior to getting the 
          test, your insurance will be billed & we will not be able to switch you to self-pay. 
          Please verify your out-of-pocket estimates with the assigned testing provider to 
          determine which option is cheaper in your situation.
        </em>
      </div>
    </div>
  );
};

const CancelPolicy: React.FC<DisclaimerProps> = () => {
  const containerStyle: React.CSSProperties = {
    gridColumnGap: '1rem',
    gridRowGap: '2rem',
    backgroundColor: '#c3caf9ff', // Light pink equivalent
    color: '#000000', // Black
    textAlign: 'center',
    borderRadius: '0.625rem',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    fontSize: '1rem',
    lineHeight: 1.2,
    display: 'flex',
    boxShadow: '0 12px 35px -4px rgba(0, 0, 0, 0.25)',
  };

  const headerStyle: React.CSSProperties = {
    marginTop: 0,
    fontSize: '2.75rem',
    fontWeight: 500,
    lineHeight: 1.3,
    opacity: 1,
    transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    transformStyle: 'preserve-3d',
  };

  const italicTextStyle: React.CSSProperties = {
    fontStyle: 'italic',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>
        What is the cancellation policy like?
      </h2>
      <div style={italicTextStyle}>
        <em>
          Curex has one of the most friendly cancellation policies, ever! Whether you are on a monthly or annual plan, you can cancel anytime and get a refund for any treatment supplies that have not been shipped to you.
<br /><br />
We send your treatment kit every 3 months; once your payment for the most recent shipment is completed, you can receive a full refund for the remaining months on your plan.
        </em>
      </div>
    </div>
  );
};
export function TreatmentDelivered(){
  return(
    <div><DescCard
            heading="Treatment delivered."
            desc="Once you get your prescription, get customized treatment delivered quarterly to your door with one of our affordable plans."
            imgSrc={<Table2/>}
            imagePosition="right"
            buttonEle={<Link to="/allergy-consultation">
                <div style={{padding: "1rem"}}>See if you are eligible. Takes 2 min</div>
            </Link>}
            /></div>
  )
}
function HeroPricing() {
    return (
        <div>
            <Hero
                heading="Relief that's finally affordable."
                subtitle="The most convenient way to treat the source of allergies, now even more affordable."
                ctaText="62% cheaper than shots even when fully covered by insurance*"
                imageSrc="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/630f8425ef2fdb0ff61984dc_mom-kids-have-fun-together-mom-with-children-homely-atmosphere.avif"
            />
            <InsurancePartnersCommon />
            <TreatmentDelivered/>
            <PricesDisclaimer/>
            <DescCard
                heading="Sublingual Immunotherapy (SLIT): The cost-effective alternative to allergy shots"
                desc={<p>
                    Science is clear. At-home immunotherapy is not only more convenient than shots, but also cheaper and significantly less painful.
                    
                    <div style={{
                        backgroundColor: '#ff69b4',
                        borderRadius: '8px',
                        padding: '20px',
                        marginTop: '20px',
                        color: 'white'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px'
                        }}>
                            <div style={{
                                backgroundColor: 'yellow',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '15px'
                            }}>
                                <img 
                                    src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/6308a12b7d2c740609b6cfd5_Sun-pink.svg" 
                                    alt="sun pink icon"
                                    style={{
                                        width: '24px',
                                        height: '24px'
                                    }}
                                />
                            </div>
                            <div style={{
                                fontWeight: 'bold',
                                fontSize: '18px'
                            }}>Did you know?</div>
                        </div>
                        <div>
                            In most Western European countries, sublingual (under-the-tongue) immunotherapy is preferred by allergists over shots. In France, 90% of immunotherapy is delivered under-the-tongue.
                        </div>
                    </div>
                </p>}
                imgSrc={"https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/63089fb51a24640e284395f0_image6.avif"}
                
            />
            <CancelPolicy/>
            <div style={{display: 'flex', flexDirection: 'column',alignItems:"center", textAlign: 'center', marginTop: '20px'}}>
                <div style={{flex: 1, marginRight: '10px'}}>
                    <h2>How Do SLIT Costs Compare to Allergy Shots?</h2><br />
                    <p>Curex is much better <b>value</b> than allergy shots.</p>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
              <ComparisonTable
                columns={[
                  { 
                    key: 'curex', 
                    label: 'Curex',
                    imageSrc: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/61e0365c68893c40d582eee6_Curex-144-2.webp',
                    imageAlt: 'Curex packaging'
                  },
                  { 
                    key: 'allergy-shots', 
                    label: 'Allergy Shots',
                    imageSrc: 'https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/629f7e905eabc4379a47eeed_image1.webp',
                    imageAlt: 'doctor giving patient a shot'
                  }
                ]}
                rows={[
                  {
                    key: 'insurance',
                    label: 'Accepts insurance?',
                    values: [
                      <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627e7faff6d387845aec8e3e_check.svg" 
                           alt="check icon" className="check--image is--larger" />,
                      <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627e7faff6d387845aec8e3e_check.svg" 
                           alt="check icon" className="check--image is--larger" />
                    ]
                  },
                  {
                    key: 'efficacy',
                    label: 'Efficacy Studies?',
                    values: [
                      <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627e7faff6d387845aec8e3e_check.svg" 
                           alt="check icon" className="check--image is--larger" />,
                      <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/627e7faff6d387845aec8e3e_check.svg" 
                           alt="check icon" className="check--image is--larger" />
                    ]
                  },
                  {
                    key: 'treatment-cost',
                    label: 'Treatment cost per year',
                    values: [
                      <div>
                        <div className="prices-comparison_hover-text">$590-$990*</div>
                        <div className="prices-comparison_hover-wrapper" style={{ display: 'none', opacity: 0 }}>
                          <div className="text-size-tiny">* Certain rare allergens or complex allergen mixes may require an additional surcharge. Our clinical team will recommend the most appropriate treatment and most affordable options.</div>
                        </div>
                      </div>,
                      <div>$0-$3,000+</div>
                    ]
                  },
                  {
                    key: 'time',
                    label: 'Time spent per year',
                    values: [
                      <div className="example-text">1 hour</div>,
                      <div>
                        <div className="prices-comparison_hover-text">50 hours, or $1,500/year*</div>
                        <div className="prices-comparison_hover-wrapper" style={{ display: 'none', opacity: 0 }}>
                          <div className="text-size-tiny">*&nbsp;Calculated as: $30/hour average hourly wage * average number of hours required to get treatment</div>
                        </div>
                      </div>
                    ]
                  },
                  {
                    key: 'commuting',
                    label: 'Commuting to clinic',
                    values: [
                      <div className="example-text">$0</div>,
                      <div>&gt;$500</div>
                    ]
                  },
                  {
                    key: 'total',
                    label: 'Total cost/year',
                    values: [
                      <div>$590-$2,400</div>,
                      <div>$2,000-$5,000</div>
                    ],
                    isPriceRow: true
                  }
                ]}
                className="slit-comparison-table"
              />
            </div>
            <Testimonials/>
            <Faq
                title="FAQs"
                faqs={[
                    {
                        question: "Sign up for Free Webinar",
                        answer: (
                            <>
                                <p>Learn how allergy immunotherapy can help you find lasting relief. Allergy experts discuss allergy shots, allergy drops and food OIT to help you reduce your environmental and/or food allergies. Reserve your spot here: </p>
                                <p><a target="_blank" href="https://calendly.com/webinar-curex/allergy-immunotherapy">https://calendly.com/webinar-curex/allergy-immunotherapy</a></p>
                            </>
                        )
                    },
                    {
                        question: "What is Curex?",
                        answer: (
                            <>
                                <p>Curex is America's #1 Online Allergy Clinic and the place to go for all your allergy questions and needs. We believe that true allergy care should have only one goal: zero allergies. We believe in a world without allergies, and we offer the easiest and most affordable treatment to get you to zero-allergies: sublingual immunotherapy.</p>
                                <p>Sublingual immunotherapy is a form of allergy treatment that involves placing drops containing allergenic extracts under the tongue. This method helps build the body's tolerance to allergens over time, just like allergy shots. The treatment is customized based on an individual's specific allergies, as determined by allergy testing and medical history.</p>
                                <p>Curex offers comprehensive services that include at-home allergy testing, online consultations, symptom management, and personalized sublingual immunotherapy plans. Our goal is to improve access to quality allergy care for anyone who needs it. If you're ready to finally get rid of your allergies, you're in the right place. Together with our partners we have treated more patients with allergy drops than anyone else in the U.S.</p>
                            </>
                        )
                    },
                    {
                        question: "Is Curex legitimate?",
                        answer: (
                            <>
                                <p>Curex is the largest online allergy and asthma clinic in the U.S. We started because our clinicians wanted to offer more convenient and affordable allergy and asthma care for everyone. So far we have attracted more than 50,000 customers from every U.S. state. We are proud to have the highest patient satisfaction and loyalty rates in the industry. Our service has been audited and certified by <a href="http://legitscript.com/">LegitScript.com</a>.</p>
                            </>
                        )
                    },
                    {
                        question: "Is Curex safe?",
                        answer: (
                            <>
                                <p>Allergy immunotherapy is very safe, with mild side effects including redness, itching and swelling. Severe reactions are extremely rare. Most common form of allergy immunotherapy in the United States is allergy shots, which are administered in person. Curex clinicians prescribe a different form of immunotherapy called "sublingual immunotherapy" (SLIT), which is applied under the tongue instead of injections. This form is shown to be even safer, and people with more severe allergies are usually pointed in this direction.</p>
                            </>
                        )
                    },
                    {
                        question: "What services do you offer?",
                        answer: (
                            <>
                                <p>Curex provides comprehensive care for those suffering from allergies, asthma and eczema. This includes customized <a href="https://getcurex.com/sublingual-immunotherapy">sublingual immunotherapy</a>, at-home concierge allergy testing, and symptom management. Our goal is to provide accessibility and quality of allergy care in the U.S.</p>
                            </>
                        )
                    },
                    {
                        question: "Does Curex accept insurance?",
                        answer: (
                            <>
                                <p>We accept most commercial insurance plans and are likely in-network for yours. However, estimating the exact out-of-pocket costs prior to submitting the first insurance claim can be challenging. Each insurance plan varies in terms of deductibles, how telemedicine consultations are covered, and the treatment of payments related to your specific medical "complexity," which we will only be able to assess after your consultation with one of our doctors.</p>
                                <p>Regardless of your insurance company's response, we are committed to working with you to find the most affordable path to obtaining allergy care. We believe we have the lowest price for allergy immunotherapy in the U.S., and our aim is to make this treatment accessible to everyone who needs it. Please note that an average patient responsibility is $200 per year and depends on your insurance plan (deductibles, coinsurance, telemedicine benefit).</p>
                            </>
                        )
                    },
                    {
                        question: "Should I use insurance if I'm not sure about my deductibles or copays?",
                        answer: (
                            <>
                                <p>If you pick an insurance plan, we will bill your insurance for each quarterly visit (required). However, this does not guarantee payment, as your health insurance company may deny payment for any service, even if you are eligible or in-network with us. If your insurance company denies payment, you will be personally and fully responsible for payment after services are rendered, including any co-payment, non-covered portions, deductible amount, or coinsurance that applies. Curex is unable to provide an accurate estimate of how much your insurance will pay and how much you will be responsible for paying. The average patient responsibility is $200/year and depends on your plan (deductibles, coinsurance, telemedicine benefit). We encourage you to call the number on the back of your insurance card and ask your member representative about your 'allergy, asthma, and telemedicine visit' benefits. Once a claim is submitted, we are unable to take it back. By proceeding, you agree to pay any additional charges that may be incurred that are not covered by your insurance policy.</p>
                            </>
                        )
                    },
                    {
                        question: "What conditions do you treat?",
                        answer: (
                            <>
                                <p>We focus on food as well as indoor and outdoor allergies caused by environmental or inhalant allergies, like those caused by pollens, weeds, grasses, dust mites, molds and pets. We also treat allergic asthma and eczema, as these conditions are closely related to allergies.</p>
                            </>
                        )
                    },
                    {
                        question: "What is immunotherapy?",
                        answer: (
                            <>
                                <p><a href="https://getcurex.com/immunotherapy-101" target="_blank">Immunotherapy</a> is a longstanding form of treatment that aims to meaningfully reduce the underlying cause of indoor/outdoor allergies and related conditions. Immunotherapy is frequently practiced by using allergen extracts for allergy drops, allergy shots and allergy tablets.</p>
                            </>
                        )
                    },
                    {
                        question: "Can my child use Curex?",
                        answer: (
                            <>
                                <p>Curex <a href="https://getcurex.com/kids-allergy-care">serves adults and children</a> as young as 5 years old. Certain tests and treatments may be limited for younger kids. Start by answering the quiz, so that our clinicians can recommend the best testing and treatment options.</p>
                            </>
                        )
                    },
                    {
                        question: "Does Curex treat food allergies?",
                        answer: (
                            <>
                                <p>Absolutely! We treat more than 90 different food allergies, including the most common ones - peanuts, milk, tree nuts, wheat, eggs, fish, shellfish, soy, and sesame among others.</p>
                                <p>You can learn about our food program <a href="/food">here</a>.</p>
                            </>
                        )
                    },
                    {
                        question: "What is your cancellation policy?",
                        answer: (
                            <>
                                <p>You can cancel at any time. However, please note that if you received treatment recently, we will need to collect any remaining payments for that treatment on your account. Additionally, if you had any telehealth visits, it can take up to three months for insurance to process each claim. These may be billed to you after you cancel if they have not been processed already.</p>
                            </>
                        )
                    },
                    {
                        question: "How does allergy testing work?",
                        answer: (
                            <>
                                <p>Depending on your location, we send a phlebotomist (medical assistant) to your home or office for a simple blood draw (not a finger prick). This sample is then processed using hospital-grade technology to produce accurate results. In some areas, you may need to go into a local lab for your blood draw. We work with LabCorp and Quest Diagnostics. This is an IgE blood test that results in more accurate results compared to finger prick tests that are available online through some companies. This is not a skin scratch test where an allergist spends 30+ minutes injecting you with small doses of allergens to see if any swelling or reaction occurs.</p>
                            </>
                        )
                    },
                    {
                        question: "Is sublingual immunotherapy safe?",
                        answer: (
                            <>
                                <p>At-home sublingual immunotherapy is a safe alternative to allergy shots that can be done at the comfort of your home. Due to its gentle, gradual build-up phase, the risk of severe reactions is extremely low compared to allergy shots, which require monitoring post-injection.</p>
                            </>
                        )
                    }
                ]}
            />
        </div>
    )
}
export default HeroPricing;