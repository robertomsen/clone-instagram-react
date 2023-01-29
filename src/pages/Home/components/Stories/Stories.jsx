import Storie from './components/Storie/Storie'
import './Stories.css'

const MODEL_FETCH_STORIES = [
    {id: 1, name: 'Tu historia', url: 'https://picsum.photos/id/1/200/300', viewed: true},
    {id: 2, name: 'saragm', url: 'https://picsum.photos/id/10/200/300', viewed: false},
    {id: 3, name: 'carlosxxfr', url: 'https://picsum.photos/id/30/200/300', viewed: false},
    {id: 4, name: 'ramon2jsis', url: 'https://picsum.photos/id/45/200/300', viewed: false},
    {id: 5, name: 'juan.dev', url: 'https://picsum.photos/id/60/200/300', viewed: true},
    {id: 6, name: 'toñin1232132', url: 'https://picsum.photos/id/90/200/300', viewed: true},
]

const Stories = () => {
    return (
        <div id="stories">
            {MODEL_FETCH_STORIES.map((storie) => (
                <Storie key={storie.id} name={storie.name} image={storie.url} viewed={storie.viewed} />
            ))}
        </div>
    )
}

export default Stories