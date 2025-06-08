import React from 'react'
import { Layout, Button, Divider, Avatar, Row, Col, List, Card, Typography, Tabs } from 'antd';

import { AntDesignOutlined, TranslationOutlined, GoogleOutlined, MailOutlined, GithubOutlined, YoutubeOutlined } from '@ant-design/icons';
import Introduction from '@/pages/Introduction';
import Publication from '@/pages/Publication';
import Research from '@/pages/Research';
import News from '@/pages/News';
import NewsDetail from '@/pages/News/NewsDetail';

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './github-markdown-light.css';
//import 'antd/dist/antd.css';
import { useTranslation } from 'react-i18next';
import './index.css';

const { Title, Paragraph, Text, Link } = Typography;

export default function Mainpage() {
  const { t, i18n } = useTranslation();


  const bgc = '#fff';

  const navigate = useNavigate();

  return (

    <div style={{
      'backgroundColor': bgc,
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      margin: 0,
      padding: 0
    }}>
      <Row style={{ flex: 1, margin: 0, minHeight: '100vh' }}>
        {/* 左侧个人信息区域 */}
        <Col 
          xs={24} 
          sm={24} 
          md={10} 
          lg={8} 
          xl={7} 
          xxl={6}
          style={{ 
            background: '#f8f9fa',
            borderRight: '1px solid #e8e8e8',
            minHeight: '100vh'
          }}
        >
          <Card 
            variant="borderless" 
            style={{ 
              backgroundColor: 'transparent', 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-start',
              padding: '24px 16px'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <Avatar 
                size={180}
                src='images/avatar.jpg' 
                className="profile-avatar"
                style={{ 
                  marginBottom: '16px'
                }}
              />
              <Title level={3} style={{ margin: '16px 0 8px 0', fontSize: '1.5rem' }}>
                {t('董克川')}
              </Title>
              <div style={{ marginBottom: '24px', lineHeight: '1.6' }}>
                <Text strong style={{ fontSize: '1rem', display: 'block', marginBottom: '8px' }}>
                  {t('Postgraduate Student')}
                </Text>
                <Text type="secondary" style={{ fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>
                  {t('University of Tokyo')}
                </Text>
                <Text type="secondary" style={{ fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>
                  {t('Information & Communication Engineering')}
                </Text>
                <Text type="secondary" style={{ fontSize: '0.9rem', display: 'block' }}>
                  {t('Interactive Visual Intelligence Lab')}
                </Text>
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '16px',
                flexWrap: 'wrap'
              }}>
                <Link href="mailto:kechuan.dong@outlook.com" target="_blank">
                  <MailOutlined style={{ fontSize: '20px' }} />
                </Link>
                <Link href="https://github.com/Kechuan-ln" target="_blank">
                  <GithubOutlined style={{ fontSize: '20px' }} />
                </Link>
                <Link href="https://www.researchgate.net/profile/Kechuan-Dong?ev=hdr_xprf" target="_blank">
                  <span className="iconfont icon-researchgate" style={{ fontSize: '20px' }} />
                </Link>
                <Link href="https://scholar.google.com/citations?hl=zh-CN&view_op=list_works&gmla=AH8HC4w8pf7glw7NvvHeCdYARheSILAJWyb7cy6m-wnpzKXlnspC1q1BVPKpe8Sv_wYTVLtEmwLCxTOwKDVw0H_3bwA&user=dm8zvHcAAAAJ" target="_blank">
                  <GoogleOutlined style={{ fontSize: '20px' }} />
                </Link>
              </div>
            </div>
          </Card>
        </Col>
        
        {/* 右侧内容区域 */}
        <Col 
          xs={24} 
          sm={24} 
          md={14} 
          lg={16} 
          xl={17} 
          xxl={18}
          style={{ 
            display: 'flex', 
            flexDirection: 'column',
            minHeight: '100vh'
          }}
        >
          <Card 
            variant="borderless" 
            style={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'flex-start',
              padding: '16px 24px'
            }}
          >
            <Tabs 
              defaultActiveKey="intro" 
              size={'large'}
              tabBarExtraContent={
                <Button 
                  type='primary' 
                  onClick={() => { i18n.changeLanguage(i18n.language == 'en' ? 'zh' : 'en') }}
                  style={{ marginBottom: '8px' }}
                >
                  {i18n.language == 'en' ? '中文' : 'English'}
                </Button>
              }
              onTabClick={(key) => {
                navigate(`/${key}`)
              }}
              items={[
                { label: t("简介"), key: 'intro' },
                { label: t("新闻"), key: 'news' },
                { label: t("研究"), key: 'research' },
                { label: t("论著"), key: 'publication' }
              ]}
            />
            <div style={{ flex: 1, overflow: 'auto', padding: '16px 0' }}>
              <Routes>
                <Route path="/" element={<Introduction />} />
                <Route path="/intro" element={<Introduction />} />
                <Route path="/news" element={<News />} />
                <Route path="/research" element={<Research />} />
                <Route path="/publication" element={<Publication />} />
                <Route path="/news/:filename" element={<NewsDetail />} />
              </Routes>
            </div>
          </Card>
        </Col>
      </Row>
    </div>

  )
}
