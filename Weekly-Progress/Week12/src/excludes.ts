type EventType = "click" | "scroll" | "mousemove" ; 

type ExcludeEvent = Exclude<EventType , 'click'> ; 

const handleEvent = ( event : ExcludeEvent ) => {
   console.log(`Handling event ${event}`)
}

handleEvent('scroll') ; 
// handleEvent('click') ;   will thrown an error as it is excluded 

