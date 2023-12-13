import clsx from 'clsx';

interface IButtonProps {
  className?: string;
  type?: 'primary' | 'secondary' | 'normal';
  isRound?: boolean;
  isDisable?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  className,
  type = 'normal',
  isRound = true,
  isDisable,
  isLoading,
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...rest
}: IButtonProps) => {
  const renderClassName = clsx(
    'text-center flex justify-center items-center py-1 transition-all',
    className,
    {
      'bg-white text-blue-900': type === 'normal',
      'bg-blue-400 text-white': type === 'primary',
      'bg-pink-300 text-blue-900': type === 'secondary',
      'rounded-large': isRound,
      'opacity-40': isDisable,
      'hover:opacity-80': !isDisable && !isLoading,
    },
  );

  return (
    <button
      disabled={isDisable || isLoading}
      className={renderClassName}
      onClick={onClick}
      {...rest}
    >
      {leftIcon && !isLoading && <span className="mr-1">{leftIcon}</span>}
      {children}
      {rightIcon && !isLoading && <span className="ml-1">{rightIcon}</span>}
    </button>
  );
};

export default Button;
