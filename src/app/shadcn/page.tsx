import { Button } from "@/components/ui/button"

function shadPage() {
  return (
    <main className="h-full flex justify-center items-center flex-col">
      <div>shadPage</div>
      <button className="px-6 py-2 bg-blue-500 rounded">
        test
      </button>
      <Button variant='destructive' size='lg'>Shadcn button</Button>
    </main>
  )
}

export default shadPage