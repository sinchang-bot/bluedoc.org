import React from "react"
import { withIntl } from '../i18n'

import Layout from "../layout"
import SEO from "../components/seo"
import cn from './pricing.module.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Pricing" keywords={['bluedoc, pricing']} />
    <section class='wrap-container'>
      <h1 class={cn.title}>Blue Doc 产品定价</h1>
      <p>在线体验</p>
      <div class={cn.wrap}>
        <div class={`${cn.cell} ${cn.box}`}>
          <h2 class={cn.type}>BASIC</h2>
          <b class={cn.price}>Free</b>
          <a class={cn.link}> 立即开始 </a>
          <ul class={cn.list}>
            <li>最大用户数量不限</li>
            <li>无限的团队、知识库创建</li>
            <li>多人参与维护团队、知识库</li>
            <li>所见即所得文档编辑器</li>
            <li>自定义目录编辑器</li>
            <li>文档历史、恢复支持</li>
            <li>图片、文件、视频上传，文档插入支持</li>
            <li>个人笔记，支持公开、私密</li>
            <li>文档分享</li>
            <li>基于 Markdown 格式的 Zip 或 Git 导入</li>
            <li>超级管理员后台</li>
            <li>支持私有化单机部署</li>
            <li>GitHub Issue 的方式技术支持</li>
          </ul>
        </div>
        <div class={`${cn.cell} ${cn.box}`}>
          <h2 class={cn.type}>PRO</h2>
          <b class={cn.price}>Comming Soon</b>
          <a class={cn.link}> 申请试用 </a>
          <ul class={cn.list}>
            <li><b>包含上面 Basic 的所有功能</b></li>
            <li>PDF 导出文档、笔记以及整个知识库</li>
            <li>Zip 导出知识库（以类似 GitBook 的结构导出 Markdown 文档）</li>
            <li>账号注册 Email 后缀限制，可以限制只允许以某些域名结尾的 Email 可以注册（配合 Email 验证流程，可以限制使用）</li>
            <li>软删除恢复功能</li>
            <li>文档、笔记的阅读记录查看</li>
            <li>支持私有化单机部署方案</li>
            <li>服务：2 个工作日内支持反馈，邮件、工单联系</li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default withIntl(IndexPage)