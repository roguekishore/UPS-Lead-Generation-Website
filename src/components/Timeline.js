import React, { useState, useEffect, useRef } from 'react';
import { milestones } from '../config/themeConfig';
import './Timeline.css';

const TimelineItem = ({ milestone, index, isVisible }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`timeline-item ${isEven ? 'timeline-item--even' : 'timeline-item--odd'} ${
        isVisible ? 'timeline-item--visible' : ''
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Content Card */}
      <div
        className={`timeline-item__content ${
          isEven ? 'timeline-item__content--even' : 'timeline-item__content--odd'
        }`}
      >
        <div className="timeline-card">
          {/* Year Badge */}
          <div className="timeline-card__year">{milestone.year}</div>

          {/* Title */}
          <h3 className="timeline-card__title">{milestone.title}</h3>

          {/* Description */}
          <p className="timeline-card__description">{milestone.description}</p>
        </div>
      </div>

      {/* Center Line Dot */}
      <div className="timeline-item__center-dot">
        <div className="timeline-item__center-dot-inner" />
      </div>

      {/* Empty Space for other side */}
      <div className="timeline-item__spacer" />
    </div>
  );
};

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const items = timelineRef.current?.querySelectorAll('.timeline__item-wrapper');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section" aria-label="Company Timeline">
      <div className="timeline-section__container">
        {/* Section Header */}
        <div className="timeline-section__header">
          <span className="timeline-section__badge">Our Journey</span>
          <h2 className="timeline-section__title">Milestones of Excellence</h2>
          <p className="timeline-section__description">
            A journey of {new Date().getFullYear() - 1997}+ years building trust and
            delivering reliable power solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline" ref={timelineRef}>
          {/* Vertical Line */}
          <div className="timeline__line-desktop" />
          <div className="timeline__line-mobile" />

          {/* Timeline Items */}
          <div className="timeline__items">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="timeline__item-wrapper"
                data-index={index}
              >
                {/* Mobile Dot */}
                <div className="timeline__dot-mobile" />

                <TimelineItem
                  milestone={milestone}
                  index={index}
                  isVisible={visibleItems.includes(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;