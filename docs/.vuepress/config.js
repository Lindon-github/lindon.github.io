/**
 *** 作者: Lenovo-【Lindon】
 *** 文件名称: config
 *** 文件创建日期: 2024/9/9 16:30
 ***
 */
import {viteBundler} from '@vuepress/bundler-vite'
import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress'


export default defineUserConfig(
    {
        bundler: viteBundler(),
        theme: defaultTheme({
            navbar: [{text: '首页', link: '/',}, {
                text: 'Lindon的博客',
                children: [
                    {text: 'Github', link: 'https://github.com'},
                    {text: 'csdn', link: 'https://blog.csdn.net'},
                    {text: '知乎', link: 'https://zhuanlan.zhihu.com'},

                ],
            },],
            sidebar: [{
                text: '前言',
                collapsible: false,
                children: [{text: '内容介绍'}, {text: '使用指南'}]
            }, {
                text: '算法学习',
                link: '/Algorithm/Divide&Conquer',
                collapsible: false,
                children: [{text: '分治法', link: '/Algorithm/Divide&Conquer'}],
            }]
        }),
        lang: 'zh-CN',
        title: 'Lindon的博客',
        description: '这是我的第一个 VuePress 站点',
    })


