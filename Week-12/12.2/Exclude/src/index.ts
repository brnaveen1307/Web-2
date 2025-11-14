type EventType = 'click' | 'scroll' | 'mousemove';

type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};

console.log(handleEvent('click'))
// console.log(handleEvent('scroll')) //Gives error