interface AvatarProps {
    name: string;
    size?: 'small' | 'big';
}

export function Avatar({ name, size = 'small' }: AvatarProps) {
    // Default size classes
    const sizeClass = size === 'big' ? 'w-8 h-8' : 'w-6 h-6';
    
    // Handling empty name or undefined
    const initial = name ? name[0] : '?';

    return (
        <div className={`relative inline-flex items-center justify-center ${sizeClass} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-2`}>
            <span className="font-medium text-gray-600 dark:text-gray-300 pb-1">
                {initial}
            </span>
        </div>
    );
}
