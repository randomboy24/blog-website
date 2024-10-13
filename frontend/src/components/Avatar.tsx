interface AvatarProps {
    name: string;
    size?: 'small' | 'big' | 'verybig';
}

export function Avatar({ name, size = 'small' }: AvatarProps) {
    // Default size classes
    const sizeClass = size === 'verybig' 
        ? 'w-20 h-20' // Larger size for 'verybig'
        : size === 'big' 
            ? 'w-8 h-8' 
            : 'w-6 h-6';

    // Handling empty name or undefined
    const initial = name ? name[0] : '?';

    // Adjust text size based on the size prop
    const textSizeClass = size === 'verybig' 
        ? 'text-5xl' 
        : size === 'big' 
            ? 'text-xl' 
            : 'text-base';

    return (
        <div className={`relative inline-flex items-center justify-center ${sizeClass} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-2`}>
            <span className={`${textSizeClass} font-medium text-gray-600 dark:text-gray-300 pb-1`}>
                {initial}
            </span>
        </div>
    );
}
