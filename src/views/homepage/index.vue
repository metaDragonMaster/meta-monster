<template>
    <div class="homepage-view">
        <section class="module n-1 flex-column limit-max-width-media">
            <img src="@/assets/homepage/banner.png" alt />
            <div class="ps">
                <p>Mate Beast It is a leisure cultivation game based on blockchain</p>
                <p>technology, where you can break through customs, challenge the</p>
                <p>arena and make money with your skills</p>
            </div>
            <div class="players">12,064,711</div>
            <div class="download-list">
                <a class="download-link" download>
                    <img src="@/assets/icons/icon-android.png" alt />
                    <p>ANDROID</p>
                </a>
                <a class="download-link" download>
                    <img src="@/assets/icons/icon-iphone.png" alt />
                    <p>IOS</p>
                </a>
                <a class="download-link" download>
                    <img src="@/assets/icons/icon-window.png" alt />
                    <p>PC</p>
                </a>
                <a class="download-link" download>
                    <img src="@/assets/icons/icon-android.png" alt />
                    <p>APK</p>
                </a>
            </div>
            <div class="contract-address">
                <h3>$ THG CONTRACT ADDRESS</h3>
                <ul>
                    <li v-for="item in ContractAddress" :key="item.address">
                        <span>{{ item.type }}</span>
                        <span>{{ item.address }}</span>
                        <img src="@/assets/icons/icon-copy.png" @click="copy(item.address)" />
                    </li>
                </ul>
            </div>
        </section>
    </div>
    <RoadMap></RoadMap>
    <Footer></Footer>
</template>

<script setup>
import { copy } from "@/utils/tools.js";
import RoadMap from "./roadmap.vue"
import Footer from "./footer.vue"
// const downloadLink = {
//     android: 'http://down.metadragon.games/MetaDragon.apk',
//     exe: 'http://down.metadragon.games/MetaDragon.exe'
// }
const ContractAddress = [
    {
        type: 'BEP20',
        address: '0x9fd87aefe02441b123c3c32466cd9db4c58618f',
    },
    {
        type: 'BEP20',
        address: '0x9fd87aefe02441b123c3c32466cd9db4c58618f',
    },
    {
        type: 'BEP20',
        address: '0x9fd87aefe02441b123c3c32466cd9db4c58618f',
    },
]
</script>

<style lang='scss' scoped>
.n-1 {
    background: url("~@/assets/homepage/bg-1.png") no-repeat;
    background-position: center -100px;
    padding-bottom: 80px;
    .ps {
        text-align: center;
        line-height: 22px;
        font-size: 18px;
        font-weight: bold;
    }
    .players {
        $spacing: 12px;
        background: url("~@/assets/homepage/banner-player.png") center no-repeat;
        background-size: contain;
        font-family: "Regular";
        font-size: 45px;
        line-height: 125px;
        text-align: center;
        color: #f4df1d;
        text-indent: $spacing;
        letter-spacing: $spacing;
        margin-top: 20px;

        @media screen and (min-width: 769px) {
            width: 420px;
            height: 135px;
        }
        @media screen and (max-width: 768px) {
            max-width: 100%;
            max-height: 135px;
        }
    }
    .download-list {
        display: flex;
        justify-content: space-between;
        @media screen and (min-width: 769px) {
            width: 410px;
        }
        @media screen and (max-width: 768px) {
            max-width: 100%;
        }
        .download-link {
            background-image: url("~@/assets/homepage/button-download-bg.png");
            font-size: 12px;
            width: 76px;
            height: 88px;
            text-align: center;
            padding-top: 20px;
        }
    }
    .contract-address {
        background-color: rgba(0, 0, 0, 0.3);
        border-right: 4px solid #344691;
        margin-top: 40px;
        @media screen and (max-width: 768px) {
            font-size: 12px;
            h3 {
                background-size: 150px 8px;
            }
        }
        h3 {
            margin-top: -22px;
            background-image: repeating-linear-gradient(
                115deg,
                rgba(255, 255, 255, 0) 0,
                rgba(255, 255, 255, 0) 6px,
                #4d4b5d 6px,
                #4d4b5d 12px
            );
            background-size: 261px 15px;
            background-position: left bottom;
            background-repeat: no-repeat;
            padding-left: 12px;
            margin-left: -12px;
            @media screen and (max-width: 768px) {
                background-size: 150px 8px;
            }
        }

        ul {
            li {
                position: relative;
                padding: 4px 12px;
                &:not(:last-child)::after {
                    display: block;
                    content: "";
                    position: absolute;
                    right: 12px;
                    bottom: 0;
                    background-color: #5278ff;
                    height: 1px;
                    width: 100%;
                }
                span {
                    margin-right: 12px;
                }
                img {
                    cursor: pointer;
                }
                @media screen and (max-width: 768px) {
                    padding: 4px;
                    span {
                        margin-right: 4px;
                    }
                }
            }
        }
    }
}
</style>