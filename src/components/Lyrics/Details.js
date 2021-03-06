import React from 'react';
import Paper from '@material-ui/core/Paper';

const Details = ({ track, lyrics }) => {
    const { track_name, artist_name, album_id, primary_genres, explicit, updated_time } = track;
    // track.track_name, track.artist_name, track.album_id, ... , track.updated_time
    const { music_genre_list } = primary_genres;
    // track.primary_genres.music_genre_list
    const { music_genre_name } = music_genre_list.length && music_genre_list[0].music_genre;

    const release_date = typeof updated_time === 'string' ? new Date(updated_time).toDateString() : 'Invalid date';
    
    const lyricsParagraphs = lyrics.split('\n'); 
    // separa cada vez que encuentra un salto de línea o \n 
    
    lyricsParagraphs.splice(lyricsParagraphs.length - 3, 3 );
    // este código sirve para delimitar un texto
    
    return(
        <Paper className="paper defaultPaper">
            <strong className="title">{`${track_name} - ${artist_name}`}</strong>
            {
                lyricsParagraphs.map((lyricsParagraph, index) => //recorrer el lyricsParagraphs e ir mostrando los párrafos
                    lyricsParagraph === '' || lyricsParagraph === '' ? 
                        <br key={index} />
                        // este br separa los párrafos cuando se cumpla la condición anterior

                    :   <p key={index}>{`${lyricsParagraph}`}</p>
                )
                
            }
            <ul>
                <li>
                    
                    <strong>Album ID: </strong>
                    <span>{album_id}</span>
                </li>

                {
                    music_genre_name &&
                        <li>
                            <strong>Song Genre: </strong>
                            <span>{music_genre_name}</span>
                        </li>
                }

                <li>
                {
                    explicit &&
                        <li>
                            <strong>Explicit Words: </strong>
                            <span>{explicit === 0 ? 'Yes' : 'No'}</span>
                        </li>
                }
                </li>

                {
                    release_date !== 'Invalid Date' &&
                        <li>
                            <strong>Release Date: </strong>
                            <span>{release_date}</span>
                        </li>
                }
            </ul>

        </Paper>
    );
};

export default Details