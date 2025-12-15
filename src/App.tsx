import './App.css';
import { Button } from './components/ui/button';

function App() {
    return (
        <main className="container mx-auto p-4">
            <h1 className="mx-auto">Hello World</h1>
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
        </main>
    );
}

export default App;
