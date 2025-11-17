export default function Footer({ t }) {
  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-600">
        <p>{t.footer}</p>
      </div>
    </footer>
  )
}
