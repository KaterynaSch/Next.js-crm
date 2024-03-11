import AddCompanyButton from './components/add-company-button';

export default function Home() {
  // використання динамічних ф-цій, як cookies(), headers(), useSearchParams(), searchParams для динамічного рендерингу
  return (
    <main>
      <h1 className="text-xl">Home page </h1>
      <AddCompanyButton />
    </main>
  );
}
