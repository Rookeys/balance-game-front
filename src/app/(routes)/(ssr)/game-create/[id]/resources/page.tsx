import ResourceFormContainer from "./_components/ResourceFormContainer"

export default async function ResourcePage() {
  return (
    <section className="mb-[80px] flex flex-col justify-center md:mb-[120px] md:mt-[40px] md:flex-row">
      <ResourceFormContainer />
    </section>
  )
}
