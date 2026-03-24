import React from 'react';
import Unit from './Unit';

function Units() {
    return (
        <section className="dashboard-card units-card">
            <h2>My Units</h2>

            <div className="units-list">
                {/* First Unit (Teal) */}
                <Unit
                    color="#76a5af"
                    title="588123 - 806"
                    instructor="Ali kashoa"
                    progress={64}
                />

                {/* Second Unit (Light Green) */}
                <Unit
                    color="#a2e2a4"
                    title="588123 - 807"
                    instructor="Ali kashoa"
                    progress={64}
                />
            </div>
        </section>
    );
}

export default Units;