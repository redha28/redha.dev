function Resume() {
  return (
    <div className="flex-[10] flex-row py-4 px-4 w-full">
      <p className="text-white text-xl font-bold mb-8">Resume</p>
      <a
        href="/path-to-your-resume/resume.pdf" // Ganti dengan path yang sesuai ke file Anda
        download="Resume" // Nama file yang akan didownload
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
