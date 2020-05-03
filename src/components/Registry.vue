<template>
  <div>
    <sub-page title="Registry">
      <registry-list title="Essentials" :links="essentials"></registry-list>
      <registry-list title="Toys" :links="toys"></registry-list>
      <registry-list title="Misc"></registry-list>
    </sub-page>
  </div>
</template>

<script>
import SubPage from "./SubPage";
import RegistryList from "./RegistryList";
export default {
  name: "registry",
  components: { RegistryList, SubPage },
  data: function() {
    return {
      essentials: [
        {
          name: "Diapers",
          link:
            "https://www.amazon.com/Pampers-Swaddlers-Disposable-Diapers-SUPPLY/dp/B07DCCP3Y1/ref=sr_1_1_sspa?dchild=1&keywords=diapers&qid=1588534252&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyTDFaOUtLWEowMFI3JmVuY3J5cHRlZElkPUEwMDIxOTc0MldKOEFVMklFQkJaUyZlbmNyeXB0ZWRBZElkPUEwMTcyODkxQVNRN1FMRjk3NkNVJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==",
        },
        {
          name: "Milk",
          link:
            "https://www.walmart.com/ip/Enfamil-Enspire-Infant-Formula-with-MFGM-and-Lactoferrin-Powder-30-oz-Refill-Box/519633740",
        },
      ],
      toys: [
        {
          name: "Stacking Cups",
          link:
            "https://www.amazon.com/dp/B0858X3VDM/ref=s9_acsd_onr_hd_bw_bDIuu3_c2_x_0_i?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-11&pf_rd_r=3SS2DFNHW0GZZJ8GJ66J&pf_rd_t=101&pf_rd_p=5b998181-6408-55d1-8e8f-3acd8becde97&pf_rd_i=196601011",
        },
      ],
    };
  },
};
</script>

<style scoped="true">
.sub_container {
  padding: 5rem 15rem;
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.heading {
}

.heading_primary {
  font-size: 8rem;
}

.line {
  position: fixed;
  top: 0;
  right: 10rem;
  height: 30vh;
  width: 2px;
  background-color: #000;
  margin-left: auto;
}

.side_img {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 35rem;
  transform: rotate(-20deg);
}
</style>
