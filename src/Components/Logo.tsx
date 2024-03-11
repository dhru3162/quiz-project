interface LogoType {
    className?: string
}

const Logo = ({ className }: LogoType) => {
    return (
        <svg className={`${className}`} width="163" height="50" viewBox="0 0 163 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.597 1.40202C19.9451 3.15877 19.0329 3.47972 17.2423 3.27702C16.5328 3.20945 15.2997 3.14189 14.5058 3.14189C13.1713 3.12499 13.0193 3.15877 12.4451 3.59797C11.7693 4.10473 11.2963 4.91554 10.7896 6.41891C10.0801 8.46283 8.57677 9.93242 6.46529 10.6588C3.66123 11.6047 2.71529 13.0743 3.20515 15.777C3.66123 18.2938 3.3234 19.7973 1.85381 21.7905C-0.49417 24.983 -0.527948 25.2871 1.27948 27.5338C3.3065 30.0338 3.72881 31.4358 3.28961 34.0202C3.13758 34.848 3.07002 35.7769 3.13758 36.1317C3.42475 37.6689 4.43826 38.7837 6.04299 39.2736C8.7119 40.1013 9.94501 41.3345 10.8065 44.0033C11.1106 44.9324 11.3639 45.3546 11.989 45.9797C13.07 47.0269 14.1004 47.2803 15.7558 46.8918C17.293 46.5371 18.3234 46.5541 19.489 46.9595C20.6206 47.3479 21.4146 47.804 22.3605 48.5979C23.2727 49.358 24.6072 50 25.2828 50C26.0599 50 26.9551 49.51 28.2389 48.3952C29.8436 46.9932 30.5363 46.7061 32.2592 46.7229C33.0531 46.7398 34.3031 46.7905 35.0464 46.8581C36.1106 46.9595 36.5328 46.9256 37.0227 46.7229C38.1207 46.25 38.7795 45.5236 39.2693 44.2398C40.2153 41.7905 41.7356 40.2027 43.864 39.4425C44.32 39.2736 44.8775 39.0709 45.1308 38.9864C45.7727 38.75 46.7355 37.7196 46.972 37.027C47.1072 36.6047 47.124 35.9459 47.0226 34.8141C46.7018 31.1824 46.972 30.0506 48.5261 28.2263C49.641 26.9256 50.0801 25.9628 50.0632 24.831C50.0632 23.6993 49.7591 23.108 48.5599 21.7905C48.07 21.25 47.5463 20.5743 47.3943 20.3041C46.9889 19.5101 46.8031 17.9223 46.9552 16.6215C47.0396 15.9797 47.1072 14.9831 47.124 14.3918C47.124 12.6351 46.3132 11.4865 44.6409 10.8952C41.347 9.71283 40.249 8.61486 39.1004 5.33782C38.7118 4.27364 37.7322 3.29392 36.7862 3.02364C36.195 2.87161 35.7389 2.88851 34.2524 3.12499C32.7153 3.37837 32.293 3.39527 31.3808 3.20945C30.0295 2.95607 29.2018 2.51689 28.1376 1.53715C26.7863 0.287157 26.2963 0 25.4687 0C24.8267 0 24.4552 0.185806 22.597 1.40202ZM30.401 9.29052C30.401 9.37499 30.3673 9.45945 30.3336 9.45945C30.2829 9.45945 30.1983 9.37499 30.1477 9.29052C30.097 9.18917 30.1309 9.12161 30.2153 9.12161C30.3166 9.12161 30.401 9.18917 30.401 9.29052ZM24.4045 9.94931C24.5396 10.1858 24.2018 10.3378 23.7964 10.2196C23.5091 10.1182 23.4754 10.0676 23.6612 9.94931C23.9652 9.7635 24.2693 9.7635 24.4045 9.94931ZM23.4754 11.2499C23.4754 11.5709 23.07 12.0101 22.8673 11.9257C22.7153 11.875 22.6646 11.9087 22.7153 11.9933C22.7829 12.0946 22.2929 12.1621 21.3977 12.1621C20.1646 12.1621 19.9788 12.1284 19.9788 11.858C19.9619 11.2669 20.2491 11.1655 21.8875 11.1655C22.766 11.1655 23.4754 11.1993 23.4754 11.2499ZM30.7051 11.4358C30.8064 11.6047 30.8741 12.4494 30.891 13.3276C30.9078 14.6452 30.8741 14.9493 30.6207 15.1352C30.3336 15.3547 30.3336 15.3716 30.6037 15.2702C30.8741 15.1689 30.9078 15.3885 30.891 17.9223C30.891 19.679 30.9585 20.7095 31.0768 20.7432C31.2964 20.8276 31.2964 21.402 31.0768 21.5371C30.9923 21.5878 30.9078 22.1452 30.9078 22.7702C30.891 23.446 30.8064 24.0202 30.6713 24.1892C30.4349 24.4932 30.1309 24.6115 30.3166 24.3412C30.3673 24.2568 30.1815 24.2905 29.8943 24.4256C29.2694 24.7466 26.8031 24.5946 26.4146 24.2061C26.1105 23.8851 26.0768 22.1284 26.3977 22.1115C26.5666 22.1115 26.5666 22.0777 26.3977 22.0101C26.2456 21.9594 26.1782 21.4864 26.1782 20.4729C26.1782 19.6114 26.1105 19.0879 26.0261 19.2229C25.9248 19.4087 25.8741 19.375 25.8065 19.1216C25.6882 18.7331 26.0936 17.8884 26.2119 18.2601C26.2626 18.3952 26.2795 18.3445 26.2456 18.1588C26.2119 17.973 26.1782 17.2803 26.1612 16.6385L26.1443 15.456L26.0092 16.3682C25.8572 17.3479 25.4348 17.9898 25.1814 17.6013C25.097 17.4493 24.9957 17.6689 24.9281 18.2264C24.8267 18.9865 24.776 19.0879 24.4045 19.0879C24.1679 19.0879 23.8639 18.902 23.6612 18.6486L23.3064 18.1925L23.2896 19.1047C23.2727 19.9493 23.2558 19.9831 23.1207 19.4763C23.0193 19.1216 23.0363 18.7838 23.1544 18.4628C23.4078 17.8547 23.3403 17.0102 23.0193 16.8412C22.8166 16.7061 22.8166 16.6554 23.0531 16.3682C23.3064 16.1148 23.3234 15.8953 23.2051 14.9155C23.0531 13.7669 23.0531 13.7669 22.4956 13.7162L21.9214 13.6656L21.9721 14.4764C21.9889 14.9325 21.9551 15.4053 21.8707 15.5236C21.8031 15.6587 21.7524 16.5034 21.7694 17.4324C21.7862 18.7331 21.8538 19.1723 22.0565 19.375C22.2929 19.6284 22.3099 19.679 22.0734 19.848C21.7694 20.0675 21.7355 20.2871 21.7694 21.9764C21.7862 23.125 21.8201 23.277 22.1241 23.3614C22.3099 23.4121 22.4619 23.5473 22.4619 23.6487C22.4619 23.7668 22.3268 23.8175 22.1241 23.7668C21.8538 23.6993 21.7862 23.7668 21.7862 24.0878C21.7862 24.4595 21.8538 24.4932 22.5463 24.4932H23.3064L23.3234 23.8514C23.3234 23.5134 23.3234 22.5169 23.3064 21.6554C23.2727 19.9661 23.239 20.0338 24.3706 19.8648C24.9957 19.7804 24.9957 19.7973 24.9957 20.3715C24.9957 20.9629 24.8606 21.081 24.5396 20.7602C24.32 20.5405 23.9315 20.7095 24.0666 20.9629C24.1342 21.0473 24.3538 21.1149 24.5903 21.1149H25.0126L24.9619 22.8885C24.9113 24.5439 25.0126 25.1013 25.2153 24.3242C25.3335 23.8514 25.5868 23.902 25.8234 24.4425C25.9923 24.8142 25.9755 24.983 25.7221 25.4561C25.3673 26.1148 25.2491 26.1486 24.9787 25.6588C24.8437 25.4054 24.7423 25.3547 24.6072 25.4898C24.5059 25.5911 24.1511 25.6757 23.8132 25.6757C23.2896 25.6757 23.1883 25.7432 23.0024 26.2162C22.7997 26.7399 22.7659 26.7567 22.5463 26.4696C22.4282 26.2838 22.3605 26.0472 22.4112 25.9121C22.5295 25.6081 21.516 25.5743 21.3977 25.8784C21.3301 26.0472 21.2626 26.0472 21.1613 25.9121C21.0937 25.7938 20.874 25.6925 20.6882 25.6588C20.3673 25.5911 20.3505 25.4391 20.2998 23.2601C20.2828 21.9425 20.3166 20.9459 20.4179 20.9459C20.6713 20.9459 20.7389 20.3378 20.5025 20.0338C20.3166 19.7634 20.2828 19.7804 20.2152 20.2195C20.1815 20.4729 20.1646 20.3041 20.1984 19.848C20.2322 19.375 20.2659 17.5844 20.2659 15.8614V12.7195L20.6882 12.5338C21.2794 12.2634 24.1679 12.2634 24.5227 12.5338C24.7423 12.7027 24.8267 13.1419 24.8774 14.4088C24.9281 15.3209 25.0126 16.1148 25.0633 16.1655C25.114 16.2331 25.1646 16.1148 25.1646 15.9121C25.1646 15.473 25.6375 14.9831 25.9416 15.1013C26.1275 15.1689 26.1782 14.8479 26.1782 13.3953C26.1782 11.9087 26.2288 11.5709 26.4653 11.402C26.651 11.2669 27.445 11.1825 28.6613 11.1655C30.3166 11.1318 30.57 11.1655 30.7051 11.4358ZM31.5835 12.8548C31.5835 12.9392 31.4652 13.0068 31.3301 13.0068C31.195 13.0068 31.0768 12.8885 31.0768 12.7534C31.0768 12.6014 31.1781 12.5507 31.3301 12.6014C31.4652 12.6689 31.5835 12.7702 31.5835 12.8548ZM19.2524 13.8513C19.2524 13.9357 19.168 14.0203 19.0666 14.0203C18.9822 14.0203 18.9483 13.9357 18.999 13.8513C19.0497 13.75 19.1342 13.6824 19.1849 13.6824C19.2187 13.6824 19.2524 13.75 19.2524 13.8513ZM15.3673 14.2061C15.3673 14.2905 15.2997 14.3581 15.1983 14.3581C15.1139 14.3581 15.0295 14.2398 15.0295 14.0878C15.0295 13.9527 15.1139 13.8851 15.1983 13.9357C15.2997 13.9864 15.3673 14.1047 15.3673 14.2061ZM34.5058 14.2567C34.6071 14.5101 34.489 14.6959 34.2524 14.6959C34.1849 14.6959 34.1173 14.5438 34.1173 14.3581C34.1173 13.9696 34.3707 13.902 34.5058 14.2567ZM20.0971 14.6115C20.0971 14.7466 20.0295 14.8648 19.9281 14.8648C19.8437 14.8648 19.7591 14.7466 19.7591 14.6115C19.7591 14.4764 19.8437 14.3581 19.9281 14.3581C20.0295 14.3581 20.0971 14.4764 20.0971 14.6115ZM33.1375 15.4053C32.8841 15.6587 32.6984 15.473 32.8335 15.1013C32.918 14.8818 32.9855 14.8479 33.1375 14.9999C33.2895 15.152 33.2895 15.2533 33.1375 15.4053ZM31.6679 15.7094C31.6172 15.7939 31.4991 15.8784 31.3977 15.8784C31.3132 15.8784 31.2457 15.7939 31.2457 15.7094C31.2457 15.608 31.3639 15.5406 31.5159 15.5406C31.6511 15.5406 31.7186 15.608 31.6679 15.7094ZM36.2287 16.8919C36.1781 16.9763 36.0599 17.0608 35.9586 17.0608C35.874 17.0608 35.8065 16.9763 35.8065 16.8919C35.8065 16.7905 35.9247 16.7229 36.0767 16.7229C36.2119 16.7229 36.2794 16.7905 36.2287 16.8919ZM15.5363 17.0608C15.5363 17.1452 15.4517 17.2297 15.3504 17.2297C15.266 17.2297 15.2322 17.1452 15.2829 17.0608C15.3336 16.9595 15.418 16.8919 15.4687 16.8919C15.5024 16.8919 15.5363 16.9595 15.5363 17.0608ZM20.0464 18.3445C19.8944 18.4965 19.5734 18.2432 19.6917 18.0405C19.7591 17.9391 19.8605 17.9391 19.9788 18.0574C20.0801 18.1588 20.1139 18.2771 20.0464 18.3445ZM32.2592 18.6825C32.2592 18.8345 32.1747 18.9189 32.0565 18.8852C31.7525 18.7838 31.7018 18.4121 31.9889 18.4121C32.1409 18.4121 32.2592 18.5304 32.2592 18.6825ZM9.91123 19.4594C9.86056 19.5946 9.80988 19.5439 9.80988 19.358C9.79299 19.1723 9.84366 19.0709 9.89434 19.1385C9.94501 19.1892 9.96191 19.3412 9.91123 19.4594ZM13.5092 19.7634C13.5092 19.848 13.4754 19.9324 13.4416 19.9324C13.391 19.9324 13.3065 19.848 13.2559 19.7634C13.2052 19.6621 13.2389 19.5946 13.3233 19.5946C13.4247 19.5946 13.5092 19.6621 13.5092 19.7634ZM16.3471 19.9661C16.2457 20.2702 15.8741 20.3209 15.8741 20.0338C15.8741 19.8817 15.9924 19.7634 16.1444 19.7634C16.2964 19.7634 16.3808 19.848 16.3471 19.9661ZM36.6511 20.1014C36.6511 20.1858 36.6173 20.2702 36.5835 20.2702C36.5328 20.2702 36.4484 20.1858 36.3977 20.1014C36.347 20 36.3808 19.9324 36.4653 19.9324C36.5667 19.9324 36.6511 20 36.6511 20.1014ZM12.2592 20.8783C12.1747 21.0979 12.0903 21.1149 11.9551 20.9797C11.8537 20.8783 11.82 20.6756 11.8876 20.5068C11.972 20.2871 12.0564 20.2702 12.1917 20.4054C12.293 20.5068 12.3268 20.7095 12.2592 20.8783ZM14.5228 20.6081C14.5228 20.6925 14.4889 20.777 14.4551 20.777C14.4045 20.777 14.3201 20.6925 14.2694 20.6081C14.2187 20.5068 14.2524 20.4392 14.3369 20.4392C14.4382 20.4392 14.5228 20.5068 14.5228 20.6081ZM18.0701 20.9459C18.0701 21.0303 18.0024 21.1149 17.9011 21.1149C17.8167 21.1149 17.7321 21.0303 17.7321 20.9459C17.7321 20.8446 17.8167 20.777 17.9011 20.777C18.0024 20.777 18.0701 20.8446 18.0701 20.9459ZM13.391 21.1486C13.4416 21.3513 13.222 22.2635 13.0532 22.4492C13.0193 22.4999 12.9011 22.3818 12.7659 22.1959C12.5632 21.9257 12.5632 21.8074 12.7659 21.4189C13.0362 20.9122 13.2727 20.8108 13.391 21.1486ZM16.1274 21.1149C16.1781 21.1993 16.1444 21.2837 16.0598 21.2837C15.9585 21.2837 15.8741 21.1993 15.8741 21.1149C15.8741 21.0135 15.9078 20.9459 15.9417 20.9459C15.9924 20.9459 16.0768 21.0135 16.1274 21.1149ZM32.597 21.4527C32.597 21.5371 32.5294 21.6216 32.4281 21.6216C32.3436 21.6216 32.2592 21.5371 32.2592 21.4527C32.2592 21.3513 32.3436 21.2837 32.4281 21.2837C32.5294 21.2837 32.597 21.3513 32.597 21.4527ZM11.8876 21.8074C11.837 21.8918 11.7187 21.9257 11.6342 21.8581C11.5497 21.8074 11.516 21.6891 11.5836 21.6047C11.6342 21.5203 11.7524 21.4864 11.837 21.554C11.9214 21.6047 11.9551 21.723 11.8876 21.8074ZM25.5024 21.6216C25.5024 21.7061 25.4348 21.7905 25.3335 21.7905C25.2491 21.7905 25.1646 21.7061 25.1646 21.6216C25.1646 21.5203 25.2491 21.4527 25.3335 21.4527C25.4348 21.4527 25.5024 21.5203 25.5024 21.6216ZM17.8167 22.4662C17.8674 22.5506 17.8335 22.6352 17.7491 22.6352C17.6477 22.6352 17.5633 22.5506 17.5633 22.4662C17.5633 22.3648 17.597 22.2972 17.6308 22.2972C17.6814 22.2972 17.766 22.3648 17.8167 22.4662ZM22.5463 22.6352C22.597 22.7196 22.5632 22.804 22.4788 22.804C22.3775 22.804 22.2929 22.7196 22.2929 22.6352C22.2929 22.5338 22.3268 22.4662 22.3605 22.4662C22.4112 22.4662 22.4956 22.5338 22.5463 22.6352ZM11.9551 23.277C11.989 23.3953 11.9044 23.4797 11.7524 23.4797C11.6004 23.4797 11.4822 23.3614 11.4822 23.2094C11.4822 22.9223 11.8537 22.9729 11.9551 23.277ZM35.6376 23.1419C35.6376 23.2263 35.5532 23.3107 35.4518 23.3107C35.3672 23.3107 35.3335 23.2263 35.3842 23.1419C35.4349 23.0406 35.5193 22.9729 35.5699 22.9729C35.6038 22.9729 35.6376 23.0406 35.6376 23.1419ZM15.097 23.6655C15.0463 23.75 14.9282 23.7838 14.8436 23.7161C14.7592 23.6655 14.7255 23.5473 14.7929 23.4628C14.8436 23.3783 14.9619 23.3446 15.0463 23.4121C15.1309 23.4628 15.1646 23.5811 15.097 23.6655ZM19.7424 23.5304C19.8437 23.6655 19.8774 23.8175 19.8098 23.8682C19.6917 24.0034 19.2524 23.6824 19.2524 23.4628C19.2524 23.2433 19.5227 23.277 19.7424 23.5304ZM13.6781 24.1554C13.6781 24.2398 13.6106 24.3242 13.5092 24.3242C13.4247 24.3242 13.3403 24.2398 13.3403 24.1554C13.3403 24.0541 13.4247 23.9865 13.5092 23.9865C13.6106 23.9865 13.6781 24.0541 13.6781 24.1554ZM37.6646 24.4932C37.6646 24.5776 37.597 24.6622 37.4956 24.6622C37.4112 24.6622 37.3268 24.5776 37.3268 24.4932C37.3268 24.3919 37.4112 24.3242 37.4956 24.3242C37.597 24.3242 37.6646 24.3919 37.6646 24.4932ZM12.3268 24.6622C12.3268 24.7466 12.2424 24.831 12.141 24.831C12.0564 24.831 12.0227 24.7466 12.0734 24.6622C12.1241 24.5608 12.2085 24.4932 12.2592 24.4932C12.293 24.4932 12.3268 24.5608 12.3268 24.6622ZM31.6005 24.7466C31.5835 24.831 31.4822 24.9156 31.3808 24.9156C31.2625 24.9156 31.1274 25.0676 31.0768 25.2533C30.9923 25.5574 30.8234 25.5911 29.3875 25.625C28.4079 25.6418 27.7659 25.7432 27.6815 25.8615C27.6139 25.9628 27.4788 25.9965 27.3774 25.9459C27.2423 25.8615 27.3437 25.6588 27.6478 25.321C28.0869 24.8649 28.1882 24.831 29.5058 24.831C30.2997 24.831 30.9417 24.7466 30.9923 24.6452C31.1274 24.4425 31.6005 24.5102 31.6005 24.7466ZM13.5092 25.2703C13.5092 25.4054 13.4416 25.473 13.3403 25.4223C13.2559 25.3716 13.1713 25.2533 13.1713 25.152C13.1713 25.0676 13.2559 25 13.3403 25C13.4416 25 13.5092 25.1183 13.5092 25.2703ZM18.2389 25.3378C18.2389 25.4223 18.1714 25.5067 18.0701 25.5067C17.9855 25.5067 17.9011 25.4223 17.9011 25.3378C17.9011 25.2364 17.9855 25.1689 18.0701 25.1689C18.1714 25.1689 18.2389 25.2364 18.2389 25.3378ZM16.972 25.8445C17.0227 25.9291 16.9889 26.0135 16.9045 26.0135C16.8032 26.0135 16.7186 25.9291 16.7186 25.8445C16.7186 25.7432 16.7525 25.6757 16.7862 25.6757C16.8369 25.6757 16.9213 25.7432 16.972 25.8445ZM34.793 25.7432C34.793 25.7938 34.7254 25.8784 34.6241 25.9291C34.5396 25.9797 34.4551 25.9459 34.4551 25.8615C34.4551 25.7601 34.5396 25.6757 34.6241 25.6757C34.7254 25.6757 34.793 25.7094 34.793 25.7432ZM33.4416 26.2499C33.4416 26.3852 33.3741 26.554 33.2727 26.6046C33.1882 26.6553 33.1038 26.554 33.1038 26.3682C33.1038 26.1655 33.1882 26.0135 33.2727 26.0135C33.3741 26.0135 33.4416 26.1148 33.4416 26.2499ZM28.7119 26.2499C28.7119 26.3006 28.6443 26.3852 28.543 26.4358C28.4586 26.4865 28.374 26.4526 28.374 26.3682C28.374 26.2669 28.4586 26.1825 28.543 26.1825C28.6443 26.1825 28.7119 26.2162 28.7119 26.2499ZM20.1984 26.9763C20.0295 27.1453 19.8774 26.8919 20.0295 26.6723C20.1308 26.4865 20.1646 26.4865 20.2322 26.6723C20.2659 26.7906 20.2491 26.9256 20.1984 26.9763ZM25.3335 26.5879C25.3335 26.7736 25.0126 26.8412 24.9113 26.6892C24.8606 26.6047 24.9281 26.5202 25.0633 26.5202C25.2153 26.5202 25.3335 26.554 25.3335 26.5879ZM32.0903 26.858C32.0903 26.9426 32.0227 27.027 31.9213 27.027C31.8369 27.027 31.7525 26.9426 31.7525 26.858C31.7525 26.7567 31.8369 26.6892 31.9213 26.6892C32.0227 26.6892 32.0903 26.7567 32.0903 26.858ZM14.3538 27.027C14.3538 27.1114 14.2355 27.196 14.1004 27.196C13.9653 27.196 13.847 27.1114 13.847 27.027C13.847 26.9256 13.9653 26.858 14.1004 26.858C14.2355 26.858 14.3538 26.9256 14.3538 27.027ZM25.9248 27.027C25.9755 27.1114 25.9078 27.196 25.7728 27.196C25.6207 27.196 25.5024 27.1114 25.5024 27.027C25.5024 26.9256 25.5701 26.858 25.6545 26.858C25.7558 26.858 25.8741 26.9256 25.9248 27.027ZM28.2052 27.196C28.2052 27.6182 27.8505 28.3783 27.6645 28.3783C27.5295 28.3783 27.6478 27.2804 27.8166 26.9763C27.9518 26.7399 28.2052 26.858 28.2052 27.196ZM12.8335 27.7027C12.8335 27.7871 12.7491 27.8715 12.6478 27.8715C12.5632 27.8715 12.5295 27.7871 12.5801 27.7027C12.6308 27.6014 12.7152 27.5338 12.7659 27.5338C12.7998 27.5338 12.8335 27.6014 12.8335 27.7027ZM24.5903 27.9898C24.4213 28.1588 24.2693 27.9054 24.4213 27.6858C24.5227 27.5 24.5565 27.5 24.624 27.6858C24.6579 27.8041 24.6409 27.9392 24.5903 27.9898ZM20.0971 27.7702C20.0971 27.8209 20.0295 27.9054 19.9281 27.9561C19.8437 28.0068 19.7591 27.9729 19.7591 27.8885C19.7591 27.7871 19.8437 27.7027 19.9281 27.7027C20.0295 27.7027 20.0971 27.7365 20.0971 27.7702ZM22.4619 27.9561C22.4619 28.1081 22.3436 28.4629 22.1916 28.75C22.0058 29.1216 21.8707 29.206 21.7355 29.071C21.6004 28.9357 21.6341 28.733 21.8368 28.2939C22.1241 27.6858 22.4619 27.5 22.4619 27.9561ZM29.3875 27.8715C29.3875 27.9561 29.3031 28.0405 29.2018 28.0405C29.1173 28.0405 29.0835 27.9561 29.1341 27.8715C29.1848 27.7702 29.2694 27.7027 29.32 27.7027C29.3538 27.7027 29.3875 27.7702 29.3875 27.8715ZM23.3064 28.1249C23.3064 28.2602 23.239 28.3783 23.1376 28.3783C23.0531 28.3783 22.9687 28.2602 22.9687 28.1249C22.9687 27.9898 23.0531 27.8715 23.1376 27.8715C23.239 27.8715 23.3064 27.9898 23.3064 28.1249ZM11.3977 28.2095C11.4483 28.2939 11.4146 28.3783 11.3302 28.3783C11.2288 28.3783 11.1443 28.2939 11.1443 28.2095C11.1443 28.1081 11.1782 28.0405 11.2119 28.0405C11.2626 28.0405 11.347 28.1081 11.3977 28.2095ZM14.1004 28.3783C14.1511 28.4629 14.0835 28.5473 13.9484 28.5473C13.7964 28.5473 13.6781 28.4629 13.6781 28.3783C13.6781 28.2769 13.7457 28.2095 13.8301 28.2095C13.9314 28.2095 14.0497 28.2769 14.1004 28.3783ZM17.3943 28.8851C17.3943 28.9696 17.3606 29.054 17.3267 29.054C17.276 29.054 17.1916 28.9696 17.141 28.8851C17.0903 28.7837 17.124 28.7162 17.2086 28.7162C17.3099 28.7162 17.3943 28.7837 17.3943 28.8851ZM26.8537 28.7837C26.8537 28.8344 26.7863 28.9189 26.6849 28.9696C26.6004 29.0203 26.5159 28.9864 26.5159 28.902C26.5159 28.8006 26.6004 28.7162 26.6849 28.7162C26.7863 28.7162 26.8537 28.75 26.8537 28.7837ZM20.1815 29.054C20.2322 29.1384 20.1308 29.223 19.9451 29.223C19.7424 29.223 19.5903 29.1384 19.5903 29.054C19.5903 28.9527 19.6917 28.8851 19.8268 28.8851C19.9619 28.8851 20.1308 28.9527 20.1815 29.054ZM29.3538 29.0878C29.2524 29.3918 28.8808 29.4425 28.8808 29.1554C28.8808 29.0033 28.9991 28.8851 29.1511 28.8851C29.3031 28.8851 29.3875 28.9696 29.3538 29.0878ZM34.0666 29.3243C33.9146 29.4764 33.5936 29.223 33.7119 29.0203C33.7795 28.9189 33.8809 28.9189 33.999 29.0371C34.1004 29.1384 34.1342 29.2567 34.0666 29.3243ZM23.0531 29.3918C23.1037 29.4764 23.07 29.5608 22.9856 29.5608C22.8842 29.5608 22.7997 29.4764 22.7997 29.3918C22.7997 29.2905 22.8336 29.223 22.8673 29.223C22.918 29.223 23.0024 29.2905 23.0531 29.3918ZM21.8538 29.8818C21.9889 30.1013 21.7862 30.5912 21.6004 30.4729C21.3977 30.3546 21.3977 29.7297 21.6004 29.7297C21.7018 29.7297 21.8031 29.7972 21.8538 29.8818ZM19.4214 30.0675C19.4214 30.1519 19.3537 30.2365 19.2524 30.2365C19.168 30.2365 19.0836 30.1519 19.0836 30.0675C19.0836 29.9662 19.168 29.8986 19.2524 29.8986C19.3537 29.8986 19.4214 29.9662 19.4214 30.0675ZM24.9957 30.4899C24.9957 30.625 24.9281 30.7433 24.8267 30.7433C24.7423 30.7433 24.6579 30.625 24.6579 30.4899C24.6579 30.3546 24.7423 30.2365 24.8267 30.2365C24.9281 30.2365 24.9957 30.3546 24.9957 30.4899ZM27.5295 30.5743C27.5295 30.6587 27.4957 30.7433 27.4618 30.7433C27.4112 30.7433 27.3268 30.6587 27.2761 30.5743C27.2254 30.4729 27.2591 30.4053 27.3437 30.4053C27.445 30.4053 27.5295 30.4729 27.5295 30.5743ZM29.8268 30.8614C29.6578 31.0304 29.5058 30.777 29.6578 30.5574C29.7592 30.3716 29.7929 30.3716 29.8605 30.5574C29.8943 30.6756 29.8775 30.8107 29.8268 30.8614ZM13.0869 30.7433C13.1376 30.8277 13.1038 30.9121 13.0193 30.9121C12.9179 30.9121 12.8335 30.8277 12.8335 30.7433C12.8335 30.6419 12.8673 30.5743 12.9011 30.5743C12.9518 30.5743 13.0362 30.6419 13.0869 30.7433ZM11.9044 31.081C11.9551 31.1655 11.9214 31.25 11.837 31.25C11.7356 31.25 11.651 31.1655 11.651 31.081C11.651 30.9797 11.6849 30.9121 11.7187 30.9121C11.7693 30.9121 11.8537 30.9797 11.9044 31.081ZM19.2187 31.2837C19.1173 31.5878 18.7456 31.6385 18.7456 31.3514C18.7456 31.1993 18.8639 31.081 19.016 31.081C19.168 31.081 19.2524 31.1655 19.2187 31.2837ZM18.0531 31.6892C18.3402 31.7568 18.5768 31.9088 18.5768 32.0269C18.5768 32.3649 18.9653 32.2466 19.1173 31.8749C19.2017 31.6722 19.3876 31.5878 19.6241 31.6215C19.9957 31.6722 20.0125 31.7398 20.0632 33.5135C20.0971 34.8817 20.0464 35.3885 19.8944 35.4898C19.7254 35.6081 19.7254 35.6756 19.8944 35.8446C20.0125 35.9628 20.0971 36.5033 20.0971 37.1959C20.0971 38.2433 20.1308 38.3446 20.4349 38.3446C20.7727 38.3446 20.7896 38.26 20.7559 35.5574C20.7389 33.5304 20.7896 32.7027 20.9416 32.5169C21.0599 32.3649 21.1106 32.1959 21.043 32.1452C20.9754 32.0776 20.8572 32.1283 20.7727 32.2635C20.5532 32.6013 20.57 32.3142 20.7727 31.9088C21.026 31.4527 21.6174 31.4865 21.6341 31.9595C21.6341 32.179 21.6848 33.4797 21.7187 34.8648C21.7524 36.25 21.8031 37.3986 21.8368 37.4324C21.8538 37.4662 21.9721 37.4324 22.0734 37.3648C22.2255 37.2804 22.2929 36.385 22.2929 34.4087L22.3268 31.5878H22.7322H23.1376V35.3885V39.1891H22.7153C22.4282 39.1891 22.2929 39.0878 22.2929 38.8851C22.2761 38.6317 22.2592 38.6317 22.0734 38.8514C21.8368 39.1385 19.7085 39.2061 19.4383 38.9358C19.3537 38.8344 19.2524 37.4492 19.2017 35.8446C19.151 33.3615 19.1004 32.8716 18.847 32.6351C18.5599 32.3649 18.5599 32.4493 18.6105 34.4087C18.6443 35.5236 18.6105 36.3851 18.5599 36.2837C18.5092 36.1993 18.4923 36.7737 18.5261 37.5675C18.5936 38.8851 18.5768 39.0202 18.2896 39.0371C18.0362 39.0371 18.0531 39.0709 18.3741 39.1891C18.8809 39.4088 18.847 39.5776 18.2221 39.8142C17.5801 40.0676 16.8032 39.831 16.9552 39.4425C17.0227 39.2568 16.9383 39.1891 16.6679 39.1891C16.1612 39.1891 15.5869 38.7837 15.8403 38.6148C15.9585 38.5473 16.043 38.277 16.043 38.0067C16.043 37.6351 15.9754 37.5338 15.7897 37.6013C15.6544 37.6689 15.5363 37.6182 15.5363 37.5169C15.5363 37.4155 15.6544 37.3311 15.7897 37.3311C15.9924 37.3311 16.0261 36.9932 15.9585 35.1688C15.8741 32.2973 15.9585 31.7905 16.5328 31.7061C17.3099 31.5878 17.5126 31.5878 18.0531 31.6892ZM31.9045 35.4054L31.9213 39.2061L31.4652 39.1554L30.9923 39.1047V35.8108C30.9923 31.7229 30.9923 31.6722 31.4991 31.6215L31.8876 31.5878L31.9045 35.4054ZM24.7086 31.8581C24.8437 32.0101 24.5227 32.6013 24.32 32.6013C24.2186 32.6013 24.1511 32.4156 24.1511 32.179C24.1511 31.7905 24.4552 31.6047 24.7086 31.8581ZM26.347 31.9595C26.347 32.0776 26.0092 33.4797 25.5868 35.0844C25.1646 36.6891 24.8267 38.0743 24.8267 38.1926C24.8267 38.3277 25.0633 38.3446 25.5868 38.277C26.2963 38.1587 26.347 38.1756 26.3302 38.5473C26.3132 38.7668 26.3639 39.0709 26.4315 39.2229C26.499 39.4088 26.4822 39.5269 26.3639 39.5269C26.2456 39.5269 26.1275 39.4088 26.0599 39.2568C25.9755 39.0371 25.7728 39.0034 24.8099 39.0878C23.6105 39.2061 23.2727 39.0541 23.6612 38.581C23.7625 38.446 23.8808 38.1756 23.8978 37.956C23.9315 37.7533 24.0666 37.2465 24.2018 36.8243C24.3369 36.402 24.624 35.3715 24.8267 34.5439C25.0294 33.6992 25.2321 32.8884 25.266 32.7196C25.3335 32.5506 25.266 32.4323 25.114 32.4323C24.945 32.4323 24.8943 32.3142 24.945 32.0946C25.0126 31.8242 25.1814 31.7568 25.6882 31.7568C26.0936 31.7568 26.347 31.8412 26.347 31.9595ZM27.5295 35L27.5464 38.26L27.8842 37.8546C28.1882 37.4831 28.222 37.2128 28.2052 34.9831C28.1882 33.6318 28.1882 32.3479 28.2052 32.1283C28.2052 31.8412 28.3065 31.7568 28.6274 31.7568H29.0497L29.0835 35C29.1173 37.6519 29.168 38.1926 29.3368 37.9053C29.4551 37.7026 29.5565 36.8581 29.5734 36.0135C29.5902 34.679 29.6409 34.4933 29.8775 34.5946C30.097 34.679 30.097 34.6453 29.8436 34.375C29.6409 34.1723 29.5565 33.9019 29.5902 33.5811C29.6409 33.2264 29.5902 33.1081 29.4045 33.1081C29.1848 33.1081 29.1848 33.0743 29.3707 32.956C29.5228 32.8547 29.5565 32.652 29.4721 32.2803C29.3707 31.7736 29.3707 31.7568 29.9788 31.7568H30.5869L30.5531 33.7331C30.5363 35.5912 30.3504 37.5338 30.1309 38.2263C30.0295 38.5304 29.3031 38.9695 28.5092 39.2061C28.1038 39.3074 28.0362 39.2905 28.0362 39.0034C28.0362 38.598 27.9349 38.598 27.3944 39.0202C27.141 39.2229 26.9044 39.3074 26.82 39.2229C26.7356 39.1385 26.668 38.0236 26.668 36.7398C26.6849 35.3547 26.6173 34.3243 26.499 34.1892C26.3809 34.054 26.3809 33.9526 26.5159 33.8682C26.6004 33.8175 26.6849 33.3108 26.6849 32.7533C26.6849 31.8074 26.7017 31.7568 27.1071 31.7568H27.5295V35ZM35.1308 31.8749C35.1308 32.0101 33.7288 37.2972 33.5092 37.9899C33.3909 38.3953 33.3909 38.3953 34.2524 38.277C34.9112 38.1926 35.1308 38.2094 35.1308 38.3783C35.1308 38.8514 34.8268 38.9864 33.6612 39.1047C32.445 39.2061 32.0565 39.0709 32.3943 38.6317C32.4787 38.5134 32.597 38.2433 32.6477 38.0067C32.6984 37.7702 32.8335 37.2465 32.9518 36.8243C33.0531 36.402 33.1545 35.9459 33.1714 35.8108C33.1882 35.6588 33.2558 35.4561 33.3402 35.3378C33.4078 35.2195 33.4754 34.8987 33.4754 34.6283C33.4922 34.3412 33.5429 34.1216 33.6105 34.1216C33.6782 34.1216 33.7795 33.8682 33.8132 33.5642C33.8639 33.277 33.9483 32.8884 34.0329 32.7196C34.1173 32.5169 34.0836 32.4323 33.8809 32.4323C33.7288 32.4323 33.6105 32.3479 33.6105 32.2635C33.6105 32.1622 33.5429 32.0946 33.4416 32.0946C33.3572 32.0946 33.2727 32.2129 33.2727 32.3479C33.2727 32.483 33.2051 32.6013 33.1038 32.6013C33.0194 32.6013 32.9348 32.4156 32.9348 32.179C32.9348 31.7736 32.9687 31.7568 34.0329 31.7568C34.641 31.7568 35.1308 31.8074 35.1308 31.8749ZM23.7288 32.4323C23.7795 32.5169 23.7118 32.6013 23.5768 32.6013C23.4247 32.6013 23.3064 32.5169 23.3064 32.4323C23.3064 32.331 23.3741 32.2635 23.4585 32.2635C23.5598 32.2635 23.6781 32.331 23.7288 32.4323ZM14.9956 32.973C14.8943 33.277 14.5228 33.3277 14.5228 33.0405C14.5228 32.8884 14.6409 32.7703 14.7929 32.7703C14.945 32.7703 15.0295 32.8547 14.9956 32.973ZM32.766 33.2938C32.6477 33.4797 32.5294 33.5979 32.4787 33.5472C32.3436 33.4121 32.5633 32.9391 32.766 32.9391C32.8841 32.9391 32.8841 33.0405 32.766 33.2938ZM24.32 34.1892C24.32 34.3243 24.2525 34.4763 24.1679 34.5439C23.9652 34.6621 23.7625 34.3412 23.8978 34.1216C24.0498 33.8682 24.32 33.9189 24.32 34.1892ZM15.5363 34.6283C15.5363 34.7128 15.4687 34.7973 15.3673 34.7973C15.2829 34.7973 15.1983 34.7128 15.1983 34.6283C15.1983 34.527 15.2829 34.4594 15.3673 34.4594C15.4687 34.4594 15.5363 34.527 15.5363 34.6283ZM24.1511 35.3885C24.1511 35.5236 24.0835 35.6419 23.9991 35.6419C23.7795 35.6419 23.6274 35.3715 23.7625 35.2365C23.9484 35.0507 24.1511 35.1351 24.1511 35.3885ZM27.8335 39.7128C27.7659 40.1857 27.3605 40.3547 27.3605 39.8986C27.3605 39.7128 27.4112 39.4256 27.4618 39.2736C27.6139 38.8851 27.9179 39.2229 27.8335 39.7128ZM20.5193 40.0337C20.57 40.1183 20.5362 40.2027 20.4518 40.2027C20.3505 40.2027 20.2659 40.1183 20.2659 40.0337C20.2659 39.9323 20.2998 39.8649 20.3335 39.8649C20.3842 39.8649 20.4686 39.9323 20.5193 40.0337ZM18.2389 42.5675C18.2389 42.652 18.1714 42.7364 18.0701 42.7364C17.9855 42.7364 17.9011 42.652 17.9011 42.5675C17.9011 42.4661 17.9855 42.3987 18.0701 42.3987C18.1714 42.3987 18.2389 42.4661 18.2389 42.5675Z" fill="#222831" />
            <path d="M27.7151 12.8379C27.6307 13.125 27.5969 13.3109 27.6814 13.277C27.749 13.2263 27.8164 14.2737 27.8164 15.5913C27.8334 21.6724 27.8503 22.821 27.9685 23.0067C28.0191 23.0744 28.2725 23.142 28.5598 23.142C28.9145 23.142 29.0496 23.0574 29.0665 22.8379C29.0833 22.6859 29.1172 22.2466 29.1509 21.8751C29.1847 21.5034 29.2186 19.2737 29.2186 16.9089C29.2186 12.2974 29.2354 12.3311 28.3401 12.3311C28.0023 12.3311 27.8671 12.4494 27.7151 12.8379ZM28.7118 13.9358C28.7118 14.2905 28.3401 15.0339 28.1544 15.0339C28.0023 15.0339 28.1374 13.9358 28.3232 13.6317C28.4415 13.446 28.7118 13.6656 28.7118 13.9358ZM28.7118 21.7905C28.7118 21.8751 28.6272 21.9595 28.5259 21.9595C28.4415 21.9595 28.4078 21.8751 28.4584 21.7905C28.5091 21.6892 28.5935 21.6217 28.6442 21.6217C28.6779 21.6217 28.7118 21.6892 28.7118 21.7905Z" fill="#222831" />
            <path d="M29.81 13.8514C29.8606 13.9358 29.945 14.0204 29.9957 14.0204C30.0296 14.0204 30.0633 13.9358 30.0633 13.8514C30.0633 13.75 29.9789 13.6824 29.8776 13.6824C29.793 13.6824 29.7593 13.75 29.81 13.8514Z" fill="#222831" />
            <path d="M24.1514 14.3749C24.1514 14.4593 24.2358 14.4931 24.3202 14.4424C24.4215 14.3917 24.4892 14.3073 24.4892 14.2566C24.4892 14.2229 24.4215 14.189 24.3202 14.189C24.2358 14.189 24.1514 14.2736 24.1514 14.3749Z" fill="#222831" />
            <path d="M30.1476 16.3852C30.1982 16.4696 30.2828 16.5542 30.3335 16.5542C30.3672 16.5542 30.4009 16.4696 30.4009 16.3852C30.4009 16.2839 30.3165 16.2162 30.2152 16.2162C30.1308 16.2162 30.0969 16.2839 30.1476 16.3852Z" fill="#222831" />
            <path d="M29.8098 17.2296C29.6241 17.5506 29.8942 17.7363 30.2322 17.5336C30.4686 17.3816 30.5024 17.2972 30.3503 17.1959C30.0802 17.0269 29.9281 17.0269 29.8098 17.2296Z" fill="#222831" />
            <path d="M27.0228 22.7366C27.0228 22.8717 27.1072 22.9393 27.1918 22.8886C27.2931 22.8379 27.3606 22.7196 27.3606 22.6183C27.3606 22.5339 27.2931 22.4662 27.1918 22.4662C27.1072 22.4662 27.0228 22.5845 27.0228 22.7366Z" fill="#222831" />
            <path d="M24.2523 24.3075C23.9313 24.8987 23.9313 25 24.1509 25C24.2523 25 24.3197 24.8649 24.3197 24.696C24.3197 24.527 24.4043 24.3075 24.5224 24.1892C24.6238 24.0879 24.6745 23.9528 24.6238 23.8852C24.5563 23.8345 24.3874 24.0202 24.2523 24.3075Z" fill="#222831" />
            <path d="M26.6851 23.9865C26.6851 24.0709 26.7695 24.1555 26.8539 24.1555C26.9552 24.1555 27.0228 24.0709 27.0228 23.9865C27.0228 23.8852 26.9552 23.8176 26.8539 23.8176C26.7695 23.8176 26.6851 23.8852 26.6851 23.9865Z" fill="#222831" />
            <path d="M20.7053 24.1384C20.6377 24.2567 20.6207 24.3918 20.6714 24.4425C20.8234 24.5945 20.9924 24.3748 20.908 24.1384C20.8404 23.9526 20.8066 23.9526 20.7053 24.1384Z" fill="#222831" />
            <path d="M22.7152 25.5067C22.6645 25.5911 22.6983 25.6756 22.7828 25.6756C22.8842 25.6756 22.9686 25.5911 22.9686 25.5067C22.9686 25.4053 22.9349 25.3377 22.901 25.3377C22.8503 25.3377 22.7659 25.4053 22.7152 25.5067Z" fill="#222831" />
            <path d="M16.8878 33.1758C16.8878 33.6149 16.8034 33.9696 16.6851 34.0203C16.5161 34.1047 16.5161 34.1386 16.6851 34.223C16.8202 34.2906 16.8878 34.7298 16.8878 35.5743C16.8878 36.6048 16.9385 36.7905 17.1412 36.7231C17.3101 36.6555 17.3945 36.7231 17.3945 36.9088C17.3945 37.0946 17.3101 37.1622 17.1412 37.0946C16.9385 37.0271 16.8878 37.1453 16.8878 37.6013C16.8878 38.142 17.2425 38.5474 17.4959 38.294C17.5466 38.2433 17.631 37.4663 17.6816 36.5541C17.7155 35.6419 17.7662 34.8649 17.7662 34.8142C17.7662 34.7467 17.7662 34.2061 17.7493 33.5642C17.7323 32.4663 17.7155 32.4324 17.3101 32.4324C16.9215 32.4324 16.8878 32.5001 16.8878 33.1758Z" fill="#222831" />
            <path d="M19.2017 32.787C19.2523 32.956 19.4044 33.108 19.5226 33.108C19.8604 33.108 19.8098 32.8884 19.4382 32.6519C19.1679 32.483 19.1342 32.4999 19.2017 32.787Z" fill="#222831" />
            <path d="M16.3807 35.1352C16.3807 35.2196 16.4651 35.3042 16.5497 35.3042C16.6511 35.3042 16.7185 35.2196 16.7185 35.1352C16.7185 35.0339 16.6511 34.9662 16.5497 34.9662C16.4651 34.9662 16.3807 35.0339 16.3807 35.1352Z" fill="#222831" />
            <path d="M20.9417 36.2838C20.9417 36.3683 21.0599 36.5034 21.212 36.5541C21.3808 36.6217 21.4484 36.571 21.4147 36.4527C21.3301 36.1993 20.9417 36.0643 20.9417 36.2838Z" fill="#222831" />
            <path d="M22.3097 38.108C22.3097 38.2939 22.3604 38.3445 22.4111 38.2093C22.4618 38.0912 22.4448 37.9391 22.3941 37.8885C22.3435 37.8208 22.2928 37.9222 22.3097 38.108Z" fill="#222831" />
            <path d="M21.4482 38.3784C21.4482 38.6994 21.482 38.7162 21.6172 38.5135C21.8367 38.1927 21.8367 38.0068 21.6172 38.0068C21.5327 38.0068 21.4482 38.1757 21.4482 38.3784Z" fill="#222831" />
            <path d="M24.3198 38.2432C24.3198 38.3952 24.4044 38.5134 24.4888 38.5134C24.5901 38.5134 24.6578 38.4459 24.6578 38.3614C24.6578 38.26 24.5901 38.1419 24.4888 38.0912C24.4044 38.0405 24.3198 38.108 24.3198 38.2432Z" fill="#222831" />
            <path d="M28.4079 35.456C28.4754 35.6755 28.712 35.7262 28.7288 35.5235C28.7288 35.456 28.6443 35.3714 28.543 35.3208C28.4247 35.287 28.3572 35.3547 28.4079 35.456Z" fill="#222831" />
            <path d="M26.854 37.331C26.854 37.4154 26.9386 37.4998 27.0399 37.4998C27.1243 37.4998 27.1581 37.4154 27.1074 37.331C27.0567 37.2296 26.9723 37.162 26.9216 37.162C26.8879 37.162 26.854 37.2296 26.854 37.331Z" fill="#222831" />
            <path d="M27.9518 38.1757C27.8842 38.2771 28.0362 38.3447 28.2727 38.3447C28.5092 38.3447 28.7119 38.2602 28.7119 38.1757C28.7119 38.0744 28.5599 38.0068 28.391 38.0068C28.2052 38.0068 28.0025 38.0744 27.9518 38.1757Z" fill="#222831" />
            <path d="M75.0055 46.5155C73.4682 46.5155 72.2183 46.1861 71.2555 45.5273C70.2926 44.8685 69.5662 44.1507 69.0764 43.3736C68.823 43.5593 68.443 43.7199 67.9362 43.855C67.4464 44.007 66.9311 44.083 66.3906 44.083C64.8366 44.083 63.5358 43.7283 62.4886 43.0189C61.4413 42.3094 60.6558 41.3466 60.1322 40.1303C59.6085 38.9141 59.3467 37.5459 59.3467 36.0256V14.0831C59.3467 12.5628 59.6338 11.1946 60.2082 9.97833C60.7993 8.76212 61.644 7.79928 62.7419 7.08982C63.8399 6.38037 65.1406 6.02563 66.644 6.02563C68.1642 6.02563 69.4649 6.38037 70.546 7.08982C71.6439 7.79928 72.4801 8.76212 73.0544 9.97833C73.6456 11.1946 73.9413 12.5628 73.9413 14.0831V36.0256C73.9413 37.0222 73.8062 37.9429 73.5359 38.7874C73.2825 39.6152 72.9868 40.2317 72.649 40.6371C72.8687 40.9918 73.1811 41.2705 73.5865 41.4732C73.9919 41.6759 74.465 41.8026 75.0055 41.8533V46.5155ZM66.644 38.7621C67.3197 38.7621 67.7926 38.4918 68.0629 37.9513C68.3332 37.3939 68.4683 36.752 68.4683 36.0256V14.0831C68.4683 13.3905 68.3332 12.7655 68.0629 12.2081C67.7926 11.6337 67.3197 11.3466 66.644 11.3466C65.9852 11.3466 65.5122 11.6337 65.2251 12.2081C64.9547 12.7655 64.8196 13.3905 64.8196 14.0831V36.0256C64.8196 36.752 64.9633 37.3939 65.2504 37.9513C65.5375 38.4918 66.0021 38.7621 66.644 38.7621ZM80.8533 44.083C80.0087 44.083 79.2993 43.8127 78.7249 43.2722C78.1507 42.7317 77.7199 42.0476 77.4327 41.2199C77.1456 40.3753 77.0019 39.5222 77.0019 38.6607V15.9581H82.1202V37.6472C82.1202 38.1709 82.2131 38.551 82.3989 38.7874C82.6016 39.0071 82.9142 39.1168 83.3364 39.1168C83.7081 39.1168 84.0205 38.9901 84.2739 38.7368C84.5442 38.4664 84.7892 38.154 85.0087 37.7993V15.9581H90.1269V43.6776H85.0087V41.3466C84.4006 41.9209 83.7165 42.5205 82.9563 43.1455C82.1962 43.7706 81.4953 44.083 80.8533 44.083ZM92.8935 43.6776V15.9581H98.0118V43.6776H92.8935ZM92.8935 11.5493V6.43104H98.0118V11.5493H92.8935ZM100.806 43.6776V39.5222L107.85 20.6202H101.921V15.9581H113.272V20.1135L106.228 39.0155H113.272V43.6776H100.806ZM120.311 43.6776L115.294 6.43104H120.361L122.54 25.7891L122.642 27.0054H123.047L123.199 25.7891L125.53 6.43104H129.483L131.814 25.7891L131.966 27.0054H132.371L132.473 25.7891L134.652 6.43104H139.719L134.703 43.6776H130.446L127.912 26.0425L127.608 23.8635H127.405L127.101 26.0425L124.567 43.6776H120.311ZM141.986 43.6776V15.9581H147.104V43.6776H141.986ZM141.986 11.5493V6.43104H147.104V11.5493H141.986ZM149.898 43.6776V39.5222L156.942 20.6202H151.013V15.9581H162.364V20.1135L155.321 39.0155H162.364V43.6776H149.898Z" fill="#222831" />
        </svg>
    )
}

export default Logo
