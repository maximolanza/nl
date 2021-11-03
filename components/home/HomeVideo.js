import { isImportOrExportSpecifier } from "typescript";

const HomeVideo = () => {
    return (
        <div class="video-background">
            <div class="video-foreground">
                <iframe id="background-video" src="https://www.youtube.com/embed/YXyFZdws65Q?controls=0&start=220&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=YXyFZdws65Q&playsinline=6" frameborder="0" autoplay="1" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default HomeVideo;