<template>
  <Banner />
  <FiveColumn />
  <BottomColumn />
</template>

<script>
import Banner from '@/components/Banner'
import FiveColumn from '@/components/FiveColumn'
import BottomColumn from '@/components/BottomColumn'

export default {
  components: {
    Banner,
    FiveColumn,
    BottomColumn
  }
}
</script>