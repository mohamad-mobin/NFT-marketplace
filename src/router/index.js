import { createRouter, createWebHashHistory } from 'vue-router'

import homepage from '../views/homepage.vue'
import createAcc from '@/views/createAcc.vue'
import connectWallet from '@/views/connectWallet.vue'
import artistPage from '@/views/artistPage.vue'
import nftPage from '@/views/nftPage.vue'
import marketplace from '@/views/marketplace.vue'
import ranking from '@/views/ranking.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: homepage,
  },
  {
    path: '/createAccount',
    name: 'createAccount',
    component: createAcc,
  },
  {
    path: '/connectWallet',
    name: 'connectWallet',
    component: connectWallet,
  },
  {
    path: '/artistPage',
    name: 'artistPage',
    component: artistPage,
  },
  {
    path: '/nftPage',
    name: 'nftPage',
    component: nftPage,
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: marketplace,
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: ranking,
  },
]

const router = createRouter({
  history: createWebHashHistory('/NFT-marketplace/'),
  routes,
    scrollBehavior() {
    return { 
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
