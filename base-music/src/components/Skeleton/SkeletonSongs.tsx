import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type SkeletonSongsProps = {
    rows?: number;
};

function SkeletonSongs({ rows  }: SkeletonSongsProps) {
    return (
        <table className="song-table">
            <tbody>
                {[...Array(rows)].map((_, i) => (
                    <tr key={`skeleton-row-${i}`}>
                        <td><Skeleton width="100%" height={50} baseColor='#3d0909' /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default SkeletonSongs;