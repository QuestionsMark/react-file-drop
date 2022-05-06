import { useState } from "react";

export const FileDrop = () => {

    const [dragOver, setDragOver] = useState(false);

    const handleDragEnter = () => {
        console.log('Wykryto przeciągnięcie pliku.');
        setDragOver(true);
    };
    const handleDragLeave = () => {
        console.log('Kursor opuścił obszar nasłuchiwania.');
        setDragOver(false);
    };
    const handleFilesChange = () => {
        console.log('Zmieniam pliki.');
        setDragOver(false);
    };

    return (
        <div className="filedrop" onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onDrop={handleFilesChange}>
            <label htmlFor="filedrop" className="filedrop__label">
                <input id="filedrop" type="file" className="filedrop__inp" multiple />
                Wybierz
            </label>
            <div className={`filedrop__curtain${dragOver ? ' active' : ''}`}>Upuść tutaj.</div>
        </div>
    );
};