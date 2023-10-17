import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './my-work.module.css';

const DocList = [
  {
    title: 'PMCS',
    // link: '/docs/category/docusaurus-contoh',
    link: 'https://e-accounting.wika.co.id/admin/',
    Svg: require('@site/static/img/wika_pmcs_logo.svg').default,
    description: (
      <>
        Project Monitorin & Control System - Alat bantu pengendalian, evaluasi waktu pelaksanaan (progress) dan biaya produksi proyek.
      </>
    ),
  },
  {
    title: 'SIMDIV',
    // link: '/docs/category/docusaurus-contoh',
    link: 'https://e-accounting.wika.co.id/',
    Svg: require('@site/static/img/wika_logo.svg').default,
    description: (
      <>
        Sistem Informasi Manajemen Divisi - Sistem pencatatan akuntansi, monitoring laporan neraca, laba rugi dan laporan produksi proyek.
      </>
    ),
  },
  {
    title: 'Nasabah Online',
    link: 'http://nasabah.wika.co.id/',
    Svg: require('@site/static/img/wika_nasabah_logo.svg').default,
    description: (
      <>
        Nasabah Online - platform untuk pembuatan Kode Nasabah secara mandiri dengan sistem approval online terintegrasi sistem SAP.
      </>
    ),
  },
  {
    title: 'WIKA PIS',
    link: 'https://pis.wika.co.id/',
    Svg: require('@site/static/img/wika_pis_logo.svg').default,
    description: (
      <>
        Performance Information System - Mengelola informasi Hasil Usaha, Risk, Monitoring Audit, Scorecard dan konsolidasi datanya.
      </>
    ),
  },
  {
    title: 'WIKA HCEO',
    link: '/wip',
    Svg: require('@site/static/img/wika_logo.svg').default,
    description: (
      <>
        Human Capital Engagement Online - Mengelola kepindahan pegawai antar proyek dengan sistem approval berbasis online.
      </>
    ),
  },
  {
    title: 'WIKA WBS',
    link: 'https://wbs.wika.co.id/',
    Svg: require('@site/static/img/wika_logo.svg').default,
    description: (
      <>
        WIKA Holding Whistle Blowing System - Pengaduan atas kasus penyuapan, penyalahgunaan wewenang dan harrasment.
      </>
    ),
  },
  {
    title: 'Winner WBS',
    link: 'https://wbs.wikaenergi.com/',
    Svg: require('@site/static/img/winner_logo.svg').default,
    description: (
      <>
        Wika Industri Energi Whistle Blowing System - Pengaduan atas kasus suap, penyalahgunaan wewenang dan pelanggaran kode etik.
      </>
    ),
  },
  {
    title: 'Wika Event',
    link: 'https://event.wika.co.id/',
    Svg: require('@site/static/img/ws_logo.svg').default,
    description: (
      <>
        WIKA Event - Undangan, QR Code absensi dan kehadiran untuk kegiatan di Wika Satrian.
      </>
    ),
  },
  {
    title: 'Knowledge Management',
    link: 'https://kmspace.wika.co.id/',
    Svg: require('@site/static/img/km_logo.svg').default,
    description: (
      <>
        Knowledge Management - Library knowledge perusahaan, berisi Pedoman, Prosedur, Instruksi Kerja dan Karya Inovasi.
      </>
    ),
  },
  {
    title: 'Fit to Work',
    link: '/ftw-details',
    Svg: require('@site/static/img/ftw_logo.svg').default,
    description: (
      <>
        Fit to Work - Aplikasi untuk kegiatan screening para pekerja sebelum melakukan pekerjaan berbahaya atau beresiko tinggi.
      </>
    ),
  },
];

function MyWork({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.openSourceSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary"
            to={link}>
            More Info
          </Link>
        </div>
        <p className="margin-top--md">{description}</p>
      </div>
    </div>
  );
}

export default function Project() {
  return (
    <Layout title="Project" description="List of my previous projects">
      <section className={styles.MyWork}>
        <div className="container margin-vert--xl">
          <div className="text--center">
            <h1>Please, take a look.</h1>
            <p>Here is a list of my previous works. A number of projects were created specifically for <code>WIKA</code>.</p>
          </div>
          <div className="row">
            {DocList.map((props, idx) => (
              <MyWork key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
