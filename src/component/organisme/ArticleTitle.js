import React from "react";

const ArticleTitle = ({ title }) => {
  // component ini akan menampilkan judul dari berita yang sedang dibuka sesuai lokasi page atau article yang dicari
  return (
    <div className="font-bold text-3xl text-center mb-20 capitalize">
      <h2>{title} News</h2>
    </div>
  );
};

export default ArticleTitle;
