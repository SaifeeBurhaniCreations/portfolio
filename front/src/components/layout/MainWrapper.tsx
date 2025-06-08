import { ForwardedRef, forwardRef, ReactNode } from 'react';

interface MainWrapperProps {
    children: ReactNode;
    className?: string;
}

const MainWrapper = forwardRef<HTMLDivElement, MainWrapperProps>(({ children, className = '' }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <section ref={ref} className={`pt-cs ${className}`.trim()}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default MainWrapper;