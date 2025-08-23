---
title: 地图
date: 2023/06/09
aside: false
---

# 参加过的比赛地图
<race-map v-if="componentsLoaded"></race-map>

<script setup>
import { inject,watch } from 'vue';
const componentsLoaded = inject('componentsLoaded', false);
</script>
