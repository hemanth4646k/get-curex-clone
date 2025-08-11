import { Link } from "react-router-dom";
import Hero from "../../../common/ui/Hero";
import './Testimonials.css'

function HeroKAC() {
  return (
    <div style={{ padding: "2rem 4rem" }}>
      <Hero
        heading="#1 Pediatrician-Approved Alternative to Allergy Shots"
        subtitle="Control your child's allergies without the hassle of shots."
        ctaText="Take out Free quiz"
        imageSrc="/alternative_allergy_shots.webp"
      />
      <KidsTestimonials />
    </div>
  );
}

export function KidsTestimonials() {
  return (
    <div className="section_testimonials2">
      <div className="padding-global no-padding-right">
        <div className="container-medium">
          <div className="padding-section-medium">
            <div className="w-layout-vflex testimonials-grid_wrapper no-scrollbar">
              <div className="curexwyndly-testimonials_content-left-wrapper">
                <div className="curexwyndly-testimonials_image1-wrapper">
                  <div className="curexwyndly-testimonials_decor1">
                    <div className="icon-decor5 w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 296 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M224.17 79.944C211.77 100.06 203.99 122.301 201.49 144.986C201.31 146.611 201.28 147.619 201.32 148.243C202.77 147.872 205.32 146.631 207.45 144.481C223.78 127.989 229.8 102.385 224.17 79.944ZM131.18 77.826C116.95 94.503 107.51 115.314 105.11 137.161C104.42 143.431 106.15 150.824 108.97 153.641C109.75 154.42 110.27 154.521 111.01 154.439C112.38 154.287 114.34 152.878 116.85 150.252C134.68 131.53 140.29 101.969 131.18 77.826ZM110.67 171.882C105.43 171.882 100.52 169.825 96.6602 165.967C89.0402 158.353 86.7102 145.057 87.7902 135.258C90.8002 107.87 103.35 81.887 122.16 61.854C116.34 54.662 109.13 49.792 101.67 48.251C92.9402 46.447 78.4801 47.885 59.2201 64.985C40.1201 81.94 25.6301 103.667 17.3201 127.818L0.850098 122.151C10.1301 95.17 26.3101 70.896 47.6501 51.954C61.2701 39.869 82.3001 26.454 105.2 31.188C116.41 33.505 126.75 40.108 134.96 49.94C142.87 43.525 151.55 38.058 160.82 33.775C176.13 26.706 189.87 24.847 201.65 28.246C212.98 31.518 221.34 39.203 227.06 46.546C244.01 27.069 265.11 11.203 288.98 0.809021L295.94 16.784C273.18 26.692 252.78 42.415 236.54 62.492C242.43 75.831 244.75 91.024 243.12 106.338C241.04 125.777 232.77 143.678 219.82 156.742C215.21 161.402 207.41 166.209 199.43 165.75C194.68 165.474 190.48 163.302 187.6 159.632C182.99 153.754 183.79 146.542 184.17 143.076C187.45 113.356 198.7 84.986 215.85 60.797C211.91 54.82 205.54 47.504 196.82 44.986C189.18 42.78 179.52 44.331 168.13 49.593C159.59 53.537 151.64 58.641 144.45 64.665C151.93 79.904 154.56 98.01 151.87 115.669C149.17 133.388 141.21 149.938 129.46 162.269C125.96 165.943 120.44 170.924 112.92 171.757C112.17 171.84 111.42 171.882 110.67 171.882Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64d4aa5ca8b65943ddc1d1e5_Rectangle%201886.webp" loading="lazy" sizes="(max-width: 1066px) 100vw, 1066px" srcSet="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64d4aa5ca8b65943ddc1d1e5_Rectangle%201886-p-500.webp 500w, https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64d4aa5ca8b65943ddc1d1e5_Rectangle%201886-p-800.webp 800w, https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64d4aa5ca8b65943ddc1d1e5_Rectangle%201886.webp 1066w" alt="" className="curexwyndly-testimonials_image1" />
                  <div className="curexwyndly-testimonials_decor2">
                    <div className="icon-decor2 w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 208 209" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M133.418 208.022C131.725 208.022 129.967 207.856 128.147 207.504C111.164 204.223 99.3232 189.809 92.9542 164.663C88.9862 148.996 90.3742 124.709 90.4352 123.682L90.8142 117.295L97.0222 115.747C101.504 114.628 104.297 112.54 105.561 109.361C107.073 105.557 106.04 101.333 105.375 100.293C103.731 97.911 101.324 97.106 99.5982 96.853C96.7632 96.44 93.8062 97.21 91.6772 98.917C87.8332 101.997 86.2222 105.366 87.4582 116.184L70.1472 118.162C68.8252 106.59 69.1982 94.602 80.7812 85.32C86.7022 80.574 94.4852 78.494 102.124 79.614C109.405 80.681 115.656 84.516 119.724 90.411C123.341 95.653 125.571 105.695 121.921 115.359C119.395 122.048 114.42 127.24 107.625 130.41C107.465 137.967 107.568 151.4 109.845 160.385C114.41 178.412 121.68 188.509 131.452 190.397C138.918 191.845 141.157 184.57 141.666 182.306C142.229 179.801 146.775 156.995 133.118 128.217L127.241 115.834L140.948 115.77C172.36 115.624 188.827 110.871 189.889 101.642C190.317 97.912 189.346 96.248 188.452 95.214C182.616 88.472 161.271 87.844 145.686 87.386L131.854 86.979L138.2 74.682C147.884 55.919 151.295 36.617 146.891 25.508C145.432 21.829 143.317 19.544 140.428 18.524C135.842 16.904 130.677 17.401 125.494 19.958C114.772 25.249 105.479 38.571 99.3272 57.471L96.0422 67.564L86.7832 62.374C84.7452 61.231 82.8032 60.125 80.9382 59.062C67.5062 51.408 59.3922 46.8 48.5522 47.194C33.4852 47.756 29.8522 54.279 28.2842 60.585C27.1102 65.304 27.7802 80.096 44.7452 91.716L52.4292 96.979L46.6652 104.294C45.9162 105.246 45.0492 106.322 44.0902 107.511C36.8772 116.455 23.4522 133.104 18.7232 150.177C17.2492 155.495 17.1282 159.308 18.3512 161.835C21.4652 168.272 34.1602 167.177 42.1272 163.913C53.4922 159.255 63.8132 151.941 71.9722 142.761L84.9952 154.335C75.0812 165.49 62.5422 174.376 48.7342 180.035C31.7592 186.991 10.4832 185.582 2.66718 169.424C-0.47982 162.918 -0.721805 155.101 1.93219 145.525C6.9802 127.302 19.2672 110.71 27.5662 100.265C21.3112 94.5 16.5762 87.752 13.6772 80.401C10.4522 72.224 9.6132 63.468 11.3762 56.38C14.2652 44.761 22.9462 30.714 47.9022 29.783C62.5622 29.233 73.4192 34.776 86.4212 42.136C95.9412 19.218 108.449 8.93901 117.784 4.33301C127.14 -0.282987 137.239 -1.07699 146.229 2.09501C153.928 4.81301 159.757 10.689 163.087 19.086C168.36 32.386 166.857 50.969 159.229 70.448C176.641 71.346 192.932 73.767 201.626 83.812C206.225 89.125 208.1 95.794 207.197 103.633C204.464 127.394 174.944 132 153.876 132.939C163.522 160.502 159.661 181.696 158.664 186.129C156.072 197.656 146.783 208.021 133.418 208.022Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="curexwyndly-testimonials_content-centre-wrapper">
                <div className="w-layout-vflex providers-kids-testimonials_row1">
                  <div className="curexwyndly-testimonials_item1">
                    <div className="card-image-with-tag">
                      <div className="curexwyndly-testimonials_tag1-wrapper">
                        <div className="box-card-label-wrapper no-margin">
                          <p className="curexshots4-testimonials_customer-name">Tiffany</p>
                        </div>
                      </div>
                    </div>
                    <p className="curexwyndly-testimonials_review">
                      “Curex has greatly improved my daughters allergies and asthma... The process and care team has been to work wtih . After a year on CUREX there is a big improvement... Im looking forward to seeing what results she’ll have in another year of using the drops. Now that I have an HSA, I’M going to also sign myself up and see if I can get rid of my year round allergies and puffy eyes!”
                    </p>
                    <div className="curexwyndly-testimonials_quote-icon1 w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.0845 34.4687C36.8188 34.4687 38.6107 29.8096 38.6107 27.3009C38.6107 24.7921 39.3275 23.0002 34.31 20.8498C29.2925 18.6994 29.2915 16.1907 29.2915 15.1155C29.2915 14.0403 31.4419 6.87246 41.1185 4.72211L40.4017 0.421387C34.4285 1.3771 22.3387 6.65743 21.7653 20.133C21.527 24.9116 23.0573 34.4687 31.0845 34.4687Z" fill="currentColor"></path>
                        <path d="M9.58421 34.4687C15.3185 34.4687 17.1105 29.8096 17.1105 27.3009C17.1105 24.7921 17.8273 23.0002 12.8097 20.8498C7.79224 18.6994 7.79124 16.1907 7.79124 15.1155C7.79124 14.0403 9.9416 6.87246 19.6182 4.72211L18.9014 0.421387C12.9282 1.3771 0.838413 6.65743 0.264983 20.133C0.0267214 24.9116 1.557 34.4687 9.58421 34.4687Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="curexwyndly-testimonials_item1 is-pink">
                    <div className="card-image-with-tag">
                      <div className="curexwyndly-testimonials_tag1-wrapper">
                        <div className="box-card-label-wrapper no-margin">
                          <p className="curexshots4-testimonials_customer-name">Helen</p>
                        </div>
                      </div>
                    </div>
                    <p className="curexwyndly-testimonials_review">
                      My son has been us ing these drops for two years. It’s been life changing. He no longer has to take allergy medication everyday and can enjoy being a kid outside without itching the whole time!
                    </p>
                  </div>
                </div>
                <div className="w-layout-vflex curexwyndly-testimonials_row2">
                  <div className="curexwyndly-testimonials_item1 is-yellow">
                    <div className="card-image-with-tag">
                      <div className="curexwyndly-testimonials_tag1-wrapper is-pink">
                        <div className="box-card-label-wrapper no-margin">
                          <p className="curexshots4-testimonials_customer-name">Simone</p>
                        </div>
                      </div>
                    </div>
                    <p className="curexwyndly-testimonials_review">
                      “We have noticed an improvement with our son’s allergies in just the 4 months we have started the program. Very easy and convienient to use.”
                    </p>
                  </div>
                  <div className="curexwyndly-testimonials_item1 is-green">
                    <div className="card-image-with-tag">
                      <div className="curexwyndly-testimonials_tag1-wrapper is-pink">
                        <div className="box-card-label-wrapper no-margin">
                          <p className="curexshots4-testimonials_customer-name">CJ Morgan</p>
                        </div>
                      </div>
                    </div>
                    <p className="curexwyndly-testimonials_review">
                      “My kids and I were sick of the weekly allergy shot appointments... We actually were sitting in the waiting room on one of our weekly appointments when we saw an ad for Curex allergy drops!.. The drops are quick and easy - much better than getting poked every week. And the communication with Curex has been top notch. Overall a great experience for us the last few months!”
                    </p>
                    <div className="curexwyndly-testimonials_quote-icon2 w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.0845 34.4687C36.8188 34.4687 38.6107 29.8096 38.6107 27.3009C38.6107 24.7921 39.3275 23.0002 34.31 20.8498C29.2925 18.6994 29.2915 16.1907 29.2915 15.1155C29.2915 14.0403 31.4419 6.87246 41.1185 4.72211L40.4017 0.421387C34.4285 1.3771 22.3387 6.65743 21.7653 20.133C21.527 24.9116 23.0573 34.4687 31.0845 34.4687Z" fill="currentColor"></path>
                        <path d="M9.58421 34.4687C15.3185 34.4687 17.1105 29.8096 17.1105 27.3009C17.1105 24.7921 17.8273 23.0002 12.8097 20.8498C7.79224 18.6994 7.79124 16.1907 7.79124 15.1155C7.79124 14.0403 9.9416 6.87246 19.6182 4.72211L18.9014 0.421387C12.9282 1.3771 0.838413 6.65743 0.264983 20.133C0.0267214 24.9116 1.557 34.4687 9.58421 34.4687Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="curexwyndly-testimonials_content-right-wrapper">
                <div className="curexwyndly-testimonials_image2-wrapper">
                  <img src="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64d4aa5c8ad982a9bde24950_Rectangle%201890.webp" loading="lazy" sizes="(max-width: 1116px) 100vw, 1116px" srcSet="https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64d4aa5c8ad982a9bde24950_Rectangle%201890-p-500.webp 500w, https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64d4aa5c8ad982a9bde24950_Rectangle%201890-p-800.webp 800w, https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64d4aa5c8ad982a9bde24950_Rectangle%201890-p-1080.webp 1080w, https://cdn.prod.website-files.com/61bbbbd3e287ff6cf9bcbda8/64d4aa5c8ad982a9bde24950_Rectangle%201890.webp 1116w" alt="" className="curexwyndly-testimonials_image1" />
                  <div className="curexshots4-testimonials_decor3">
                    <div className="icon-decor3 w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 280 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M104.609 49.421C101.89 54.277 99.7672 59.494 98.3712 64.925C96.6992 71.43 97.5792 78.042 100.255 79.073C101.908 79.711 104.96 78.352 107.06 76.044C111.946 70.677 111.014 63.641 110.024 59.925C108.997 56.067 107.088 52.45 104.609 49.421ZM204.479 60.991C197.739 68.244 194.358 78.873 196.323 88.522C196.377 88.784 196.431 89.02 196.485 89.233C197.088 88.682 197.778 87.913 198.406 86.94C203.246 79.439 205.203 70.181 204.479 60.991ZM206.303 153.561C156.09 153.561 98.0592 152.528 56.2962 150.219L57.2562 132.823C115.66 136.051 206.147 136.764 261.862 135.642C261.882 133.771 261.907 131.914 261.931 130.081C262.082 118.758 262.223 108.062 261.519 97.186C260.398 79.868 255.671 67.251 247.468 59.686C240.523 53.279 230.256 50.62 220.87 52.193C223.847 67.382 221.381 83.467 213.047 96.385C206.713 106.201 196.624 110.124 188.507 105.927C183.746 103.463 180.631 98.778 179.251 92C175.474 73.464 183.771 53.387 199.19 42.613C197.393 39.21 195.162 36.036 192.507 33.22C179.263 19.167 156.598 14.087 137.384 20.866C129.174 23.764 121.592 28.781 115.242 35.237C120.678 40.731 124.811 47.749 126.86 55.44C130.1 67.601 127.58 79.386 119.945 87.773C114.054 94.244 103.745 99.09 93.9892 95.331C80.5232 90.142 78.0112 74.142 81.4962 60.587C83.3082 53.537 86.0312 46.822 89.5182 40.606C73.5432 37.805 57.1632 47.671 47.4592 57.668C37.4872 67.942 30.2932 80.556 22.6752 93.91C20.2102 98.232 17.6602 102.702 15.0202 107.062L0.116211 98.037C2.63821 93.872 5.1302 89.503 7.5412 85.277C15.3612 71.567 23.4472 57.392 34.9562 45.533C53.4242 26.505 78.5682 18.464 99.0142 25.049C99.4642 25.194 99.9142 25.349 100.358 25.512C108.957 16.004 119.665 8.64301 131.586 4.43602C157.5 -4.70998 187.078 2.05502 205.187 21.27C209.232 25.562 212.57 30.396 215.18 35.567C230.539 32.049 247.587 36.092 259.281 46.879C270.883 57.58 277.486 74.127 278.906 96.06C279.654 107.614 279.501 119.153 279.353 130.312C279.293 134.851 279.231 139.545 279.231 144.16V152.654L270.74 152.869C252.874 153.321 230.494 153.561 206.303 153.561Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="curexshots4-testimonials_decor4-copy">
                    <div className="icon-decor1 w-embed">
                      <svg width="100%" height="100%" viewBox="0 0 123 205" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M60.396 204.823C55.64 204.823 50.885 204.258 46.249 203.092C26.0735 198.017 9.25254 181.839 3.39754 161.877C-3.71646 137.627 4.91754 113.495 15.1925 88.847L32.736 46.766L48.817 53.47L31.274 95.551C22.2495 117.199 14.6045 138.187 20.1165 156.972C24.2045 170.908 36.414 182.652 50.499 186.194C64.579 189.736 80.896 185.167 91.09 174.823C102.965 162.774 107.722 142.58 103.5 122.123C99.343 101.971 88.101 83.931 76.57 67.438C75.704 66.199 74.851 64.987 74.011 63.792C62.769 47.801 53.059 33.99 44.79 5.20983L61.536 0.397827C68.997 26.365 77.08 37.861 88.264 53.771C89.113 54.978 89.974 56.203 90.849 57.455C102.846 74.614 115.757 95.297 120.565 118.602C125.947 144.685 119.408 170.914 103.5 187.053C92.251 198.466 76.334 204.823 60.396 204.823Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonials2_button-wrapper">
                <a href="/reviews" className="button is-link">
                  Read More Verified Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroKAC;
