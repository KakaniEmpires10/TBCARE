import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    author?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords,
    image,
    url,
    type = 'website',
    author = 'TBCARE'
}) => {
    // Site default configurations
    const siteName = 'TBCARE';
    const defaultTitle = 'TBCARE - Platform Edukasi Tuberkulosis';
    const defaultDescription = 'Platform edukasi dan informasi lengkap tentang tuberkulosis untuk dewasa dan anak. Dapatkan materi pembelajaran, panduan PMO, dan konsultasi kesehatan.';
    const defaultKeywords = 'tuberkulosis, TB, edukasi kesehatan, PMO, tuberkulosis anak, tuberkulosis dewasa, kesehatan paru, pengobatan TB';
    const baseUrl = 'https://tbcare.vercel.app';

    // full title
    const fullTitle = title ? title : defaultTitle;

    // Use provided values or defaults
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : baseUrl);
    const ogImage = image || `${baseUrl}/tbcare-og-image.png`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="author" content={author} />
            <meta name='developer' content='Muhammad Alim Kakani' />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="id-ID" />
            <meta name="geo.region" content="ID" />
            <meta name="geo.country" content="Indonesia" />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="id_ID" />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content="@tbcare_id" />

            {/* Medical/Health specific meta tags */}
            <meta name="medical-disclaimer" content="Informasi kesehatan di situs ini hanya untuk tujuan edukasi dan tidak menggantikan konsultasi medis profesional." />

            {/* Canonical URL */}
            <link rel="canonical" href={currentUrl} />
        </Helmet>
    );
};

export default SEO;