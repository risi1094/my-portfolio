export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6">
      <div className="container-custom text-center">

        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} RISI — Full Stack Developer
        </p>

      </div>
    </footer>
  );
}