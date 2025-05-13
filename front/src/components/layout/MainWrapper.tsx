import { FC, ReactNode } from 'react';

interface MainWrapperProps {
    children: ReactNode;
    className?: string;
}

const MainWrapper: FC<MainWrapperProps> = ({ children, className = '' }) => {
    return (
        <section className={`pt-cs ${className}`.trim()}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainWrapper;