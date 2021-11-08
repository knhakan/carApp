import React from 'react'
import { useTranslation } from "react-i18next";


const Cars = () => {
  const { t } = useTranslation();


  return (
    <div class="card-group mt-5">
      <div class="card">
        <img class="card-img-top" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{t("cardTitle")}</h5>
          <p class="card-text">{t("cardOneDescription")}</p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{t("cardTitle")}</h5>
          <p class="card-text">{t("cardTwoDescription")}</p>
        </div>
      </div>
    </div>
  )
}

export default Cars