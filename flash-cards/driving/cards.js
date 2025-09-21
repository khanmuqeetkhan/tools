// Driving theory vocabulary flash cards - organized by topic
const flashCardSets = {
        "terminology": [
            { term: "Yield", definition: "To yield means to slow down or stop to let another vehicle, pedestrian, or cyclist go before you if they have the right of way."},
            { term: "Adverse conditions", definition: "Difficult or dangerous driving conditions requiring extra caution" }
        ],
        "traffic-rules": [
            { term: "Unprotected road user", definition: "A person using the road who is not protected by a vehicle (pedestrians, cyclists, moped riders)" },
            { term: "Give way", definition: "To allow another vehicle or road user to go first; yield the right of way" },
            { term: "Right of way", definition: "The legal right to proceed before other road users in a particular situation" },
            { term: "Overtaking", definition: "Passing another vehicle that is traveling in the same direction" },
            { term: "Hard shoulder", definition: "The emergency lane on the side of a motorway for stopped vehicles" },
            { term: "Densely built-up area", definition: "Urban areas with many buildings, typically with lower speed limits" },
            { term: "Country road", definition: "Roads outside densely built-up areas, usually with higher speed limits" },
            { term: "Lane selection", definition: "Choosing the correct lane based on your intended direction and traffic rules" },
            { term: "Traffic signals", definition: "Light signals, road signs, and markings that control traffic flow" },
            { term: "Positioning", definition: "Where you place your vehicle in relation to lanes, other vehicles, and road markings" },
            { term: "Mandatory signs", definition: "Blue circular signs that show what road users MUST do" },
            { term: "Prohibitory signs", definition: "Red circular signs that show what is NOT allowed" },
            { term: "Warning signs", definition: "Triangular signs that alert drivers to potential hazards ahead" },
            { term: "Priority signs", definition: "Signs that indicate who has the right of way at intersections" },
            { term: "Advisory signs", definition: "Signs that give helpful information or recommendations to drivers" },
            { term: "Meeting traffic", definition: "Encountering vehicles coming from the opposite direction" },
            { term: "Vulnerable road users", definition: "Road users who are at higher risk of injury (children, elderly, disabled)" },
            { term: "Speed blind", definition: "The condition where you lose awareness of how fast you're actually traveling" },
            { term: "Safety margin", definition: "The safe distance you maintain from other vehicles and hazards" },
            { term: "Turning off", definition: "Leaving the main road to go in a different direction" }
        ],
        "vehicle-technical": [
            { term: "Driving characteristics", definition: "How a vehicle behaves and responds when driving (handling, braking, acceleration)" },
            { term: "Braking distance", definition: "The distance a vehicle travels from when brakes are applied until it stops completely" },
            { term: "Reaction distance", definition: "The distance traveled during the time it takes to react to a hazard" },
            { term: "Stopping distance", definition: "Total distance = reaction distance + braking distance" },
            { term: "Interior safety", definition: "Safety features inside the vehicle (seatbelts, airbags, headrests)" },
            { term: "Warning lights", definition: "Dashboard lights that indicate problems or important information about the vehicle" },
            { term: "Electrical system", definition: "The vehicle's electrical components (battery, alternator, lights, ignition)" },
            { term: "Vehicle inspection", definition: "Regular mandatory check of a vehicle's safety and environmental standards" },
            { term: "Towing capacity", definition: "The maximum weight a vehicle is legally allowed to pull" },
            { term: "Trailer", definition: "An unpowered vehicle pulled by another vehicle" },
            { term: "Load distribution", definition: "How weight is spread across a vehicle to maintain stability and safety" },
            { term: "Tire tread", definition: "The rubber pattern on tires that provides grip on the road surface" },
            { term: "Engine braking", definition: "Using the engine to slow down the vehicle instead of just the brakes" },
            { term: "ABS (Anti-lock Braking System)", definition: "Safety system that prevents wheels from locking during heavy braking" },
            { term: "ESP (Electronic Stability Program)", definition: "System that helps prevent skidding and loss of control" },
            { term: "Exhaust emissions", definition: "Harmful gases released from a vehicle's exhaust system" },
            { term: "Fuel consumption", definition: "The amount of fuel a vehicle uses, usually measured per 100 kilometers" },
            { term: "Economical driving", definition: "Driving techniques that reduce fuel consumption and environmental impact" },
            { term: "Vehicle registration", definition: "Official documentation proving legal ownership and right to use a vehicle" },
            { term: "Roadworthiness", definition: "The condition of a vehicle being safe and suitable for driving on public roads" }
        ],
        "road-conditions": [
            { term: "Slippery conditions", definition: "Road conditions where tires have reduced grip (wet, icy, snowy roads)" },
            { term: "Aquaplaning", definition: "When tires lose contact with road surface due to water, causing loss of control" },
            { term: "Black ice", definition: "Thin, nearly invisible ice on road surfaces that is extremely slippery" },
            { term: "Visibility", definition: "How far and clearly you can see while driving" },
            { term: "Dazzling", definition: "Temporary blindness or impaired vision caused by bright lights" },
            { term: "Fog", definition: "Thick cloud at ground level that severely reduces visibility" },
            { term: "Correct lighting", definition: "Using appropriate vehicle lights for different conditions and times" },
            { term: "Dipped headlights", definition: "Low beam lights used in normal driving conditions" },
            { term: "Main beam", definition: "High beam lights used when no other traffic is present" },
            { term: "Hazard warning lights", definition: "Flashing lights used to warn other drivers of danger or breakdown" },
            { term: "Friction", definition: "The grip between tires and road surface" },
            { term: "Skidding", definition: "When a vehicle slides uncontrollably due to loss of tire grip" },
            { term: "Crosswinds", definition: "Strong winds blowing across the direction of travel" },
            { term: "Road surface", definition: "The material and condition of the road (asphalt, gravel, wet, dry)" },
            { term: "Weather conditions", definition: "Environmental factors affecting driving (rain, snow, wind, temperature)" },
            { term: "Seasonal variations", definition: "Changes in driving conditions throughout different seasons" },
            { term: "Dawn and dusk", definition: "Times of day with challenging lighting conditions" },
            { term: "Glare", definition: "Bright light that makes it difficult to see clearly" },
            { term: "Darkness", definition: "Driving conditions with little or no natural light" },
            { term: "Adverse conditions", definition: "Difficult or dangerous driving conditions requiring extra caution" }
        ],
        "legal-admin": [
            { term: "Probationary licence", definition: "Temporary licence for new drivers with special restrictions" },
            { term: "Disqualification", definition: "Legal removal of driving privileges due to serious traffic violations" },
            { term: "Traffic violation", definition: "Breaking traffic laws or regulations while driving" },
            { term: "Speed limit", definition: "Maximum legal speed allowed on a particular road or area" },
            { term: "Blood alcohol limit", definition: "Legal maximum amount of alcohol allowed in bloodstream while driving" },
            { term: "Penalty points", definition: "System for recording traffic offenses that can lead to licence suspension" },
            { term: "Insurance", definition: "Financial protection required by law to cover damages in case of accidents" },
            { term: "Liability", definition: "Legal responsibility for damages or injuries caused while driving" },
            { term: "Compulsory", definition: "Required by law; mandatory" },
            { term: "Registration document", definition: "Official paper proving a vehicle is legally registered" },
            { term: "Vehicle tax", definition: "Annual fee paid to government for right to use vehicle on public roads" },
            { term: "Third party", definition: "Other people who might be affected by your driving (not you or your passengers)" },
            { term: "Comprehensive insurance", definition: "Insurance covering damage to your own vehicle as well as others" },
            { term: "Excess", definition: "Amount you must pay toward insurance claim before insurance covers the rest" },
            { term: "Valid", definition: "Legally acceptable and current (not expired)" },
            { term: "Renewal", definition: "Extending the validity period of a licence, insurance, or registration" }
        ],
        "advanced": [
            { term: "Risk assessment", definition: "Continuously evaluating potential dangers while driving" },
            { term: "Hazard perception", definition: "The ability to identify and respond to potential dangers early" },
            { term: "Defensive driving", definition: "Driving style focused on preventing accidents through awareness and caution" },
            { term: "Anticipation", definition: "Predicting what other road users might do and preparing accordingly" },
            { term: "Observation", definition: "Continuously looking and checking for hazards and other road users" },
            { term: "Concentration", definition: "Maintaining full mental focus on the driving task" },
            { term: "Peer pressure", definition: "Influence from passengers or other drivers that may affect your driving decisions" },
            { term: "Fatigue", definition: "Physical or mental tiredness that impairs driving ability" },
            { term: "Stress", definition: "Mental pressure that can negatively affect driving performance" },
            { term: "Risk-taking behavior", definition: "Dangerous driving actions that increase accident probability" },
            { term: "Environmental impact", definition: "How driving affects air quality, noise, and climate change" },
            { term: "Eco-friendly driving", definition: "Driving methods that reduce fuel consumption and emissions" },
            { term: "Journey planning", definition: "Preparing route, timing, and vehicle condition before traveling" },
            { term: "Alternative transport", definition: "Other ways to travel besides private cars (public transport, cycling, walking)" },
            { term: "Carbon footprint", definition: "The amount of carbon dioxide emissions produced by your driving" },
            { term: "Sustainable transport", definition: "Transportation methods with minimal environmental impact" },
            { term: "Road rage", definition: "Aggressive or violent behavior between drivers" },
            { term: "Courtesy", definition: "Being polite and considerate to other road users" },
            { term: "Patience", definition: "Remaining calm and not rushing while driving" },
            { term: "Responsibility", definition: "Understanding that your actions affect the safety of everyone on the road" },

            // Technical Vehicle Terms
            { term: "ABS (Anti-lock Braking System)", definition: "Help system which automatically reduces the braking force on wheels which are about to lock, maintaining steering control" },
            { term: "Accelerating overtaking", definition: "Overtaking manoeuvre where you drive behind another vehicle and accelerate when there's a gap in traffic" },
            { term: "Acceleration lane", definition: "Special lane used for access to motorways to match your speed to traffic and find a safe gap" },
            { term: "Aquaplaning", definition: "When vehicle tyres lose contact with road due to water layer, causing loss of control" },
            { term: "Brake servo", definition: "Help system which makes it easier to brake when the engine is running" },
            { term: "Braking distance", definition: "The distance the car travels from when brakes are applied until complete stop" },
            { term: "Carriageway", definition: "The part of a road that is intended for traffic with motor vehicles, divided into lanes" },
            { term: "Catalytic converter", definition: "Purification device which purifies 80-95% of harmful substances in exhaust emissions" },
            { term: "Circulatory shock", definition: "Life-threatening condition affecting seriously injured person who has lost blood" },
            { term: "Clearway", definition: "Road similar to motorway, free of junctions and often free of oncoming traffic" },
            { term: "Crumple zones", definition: "Front and rear parts of car developed to collapse during collision to absorb impact energy" },

            // Road Infrastructure & Navigation
            { term: "Cycle crossing", definition: "A kind of pedestrian crossing specifically for cyclists and moped riders" },
            { term: "Cycle lane", definition: "Lane on a road that only cyclists and moped riders may use" },
            { term: "Cycle path", definition: "Separate or detached road for cyclists and moped riders" },
            { term: "Cycle passage", definition: "Part of road intended for cyclists and moped riders to cross a carriageway" },
            { term: "Hard shoulder", definition: "The part of the road which is outside the carriageway, used for emergencies" },
            { term: "Level crossing", definition: "Junction where a road crosses a railway or tramway line" },
            { term: "Priority road", definition: "A road whose users are given priority by those on connecting roads" },

            // Driving Techniques & Safety
            { term: "Defensive driving", definition: "Driving style that is calm, calculated, without unnecessary risks, with adapted speed" },
            { term: "Direct vision", definition: "The 1-2% of field of view used when focusing eyes on something specific" },
            { term: "Deep learning", definition: "Learning method that strives to understand context and causes of traffic rules" },
            { term: "Duty to give way", definition: "When you must clearly communicate intention to give way by slowing down in advance" },
            { term: "Duty to stop", definition: "When you must stop completely and give way before proceeding, regardless of traffic" },
            { term: "Economical driving", definition: "Fuel efficient and environmentally friendly driving style" },
            { term: "Electronic stability control (ESC)", definition: "Help system that detects and assists when car is about to start skidding" },
            { term: "Flying overtaking", definition: "Overtaking manoeuvre approaching slower vehicle at significantly higher speed" },

            // Lighting & Visibility
            { term: "Fog lights", definition: "Strong lights primarily intended to improve visibility in foggy conditions" },
            { term: "Rear fog lights", definition: "Red strong rear lights to make car visible from behind when visibility is reduced" },
            { term: "Dipped headlights", definition: "Low beam lights used in normal driving conditions" },
            { term: "Main beam", definition: "High beam lights used when no other traffic is present" },
            { term: "Hazard warning lights", definition: "Flashing lights used to warn other drivers of danger or breakdown" },
            { term: "Indicators", definition: "Flashing orange lights that must be switched on before turning or moving sideways" },
            { term: "Parking lights", definition: "Weak energy efficient lights used when parked on roads with poor visibility" },
            { term: "Reversing lights", definition: "One or two white lights that turn on automatically when car is in reverse" },

            // Weather & Road Conditions
            { term: "Freezing rain", definition: "Rain that looks normal but freezes immediately upon contact with road" },
            { term: "Friction tyres", definition: "Another word for non-studded winter tyres" },
            { term: "The jackknife effect", definition: "Dangerous situation when trailer rear end slides, causing car and trailer to fold like jackknife" },
            { term: "Black ice", definition: "Thin, nearly invisible ice on road surfaces that is extremely slippery" },
            { term: "Crosswinds", definition: "Strong winds blowing across the direction of travel" },

            // Legal & Administrative
            { term: "Aggravated drunk driving", definition: "Serious criminal offence with limit of 1.0 per mille blood alcohol" },
            { term: "Drunk driving", definition: "Serious criminal offence with limit of 0.2 per mille blood alcohol" },
            { term: "Probationary period", definition: "Two-year period after first obtaining licence with special restrictions" },
            { term: "Flying inspection", definition: "When vehicle is stopped and inspected on site by police or inspectors" },
            { term: "Registration inspection", definition: "Inspection required when you alter something on vehicle affecting registration certificate" },
            { term: "Full comprehensive insurance", definition: "Insurance containing traffic insurance, partial casco insurance and vehicle damage insurance" },
            { term: "Partial casco insurance", definition: "Collective term for variety of insurance policies that increase protection" },
            { term: "Traffic insurance", definition: "Compulsory insurance covering costs after accident but not damage to your own car" },
            { term: "Vehicle damage insurance", definition: "Insurance providing compensation for damages even if you are at fault" },

            // Measurements & Technical Specifications
            { term: "Gross weight", definition: "The actual weight of car or trailer at certain moment, varying with load" },
            { term: "Kerb weight", definition: "Weight of car with driver when unloaded and fully equipped" },
            { term: "Maximum load", definition: "Car or trailer's maximum permitted load according to registration certificates" },
            { term: "Total weight", definition: "Weight of car with driver, equipment plus maximum permitted load" },
            { term: "Tow ball weight", definition: "Weight a trailer coupling device exerts on car's tow bar" },
            { term: "Tread depth", definition: "Depth of grooves on tyres, decisive factor for grip" },
            { term: "Emergency wheel", definition: "Wheel that is lighter and narrower than regular wheels for short distances" },

            // Driving Psychology & Behavior
            { term: "Accident-prone drivers", definition: "The 15% of population involved in about 50% of all traffic accidents" },
            { term: "Learning by imitation", definition: "Learning process where you subconsciously adapt behaviour of others" },
            { term: "Microsleep", definition: "Brief, involuntary episode of sleep generally caused by lack of sleep" },
            { term: "Over learning", definition: "Learning method where you practice until maneuvering becomes second nature" },
            { term: "Probability learning", definition: "Learning process where you learn from experiences and make decisions based on them" },
            { term: "Reaction formation", definition: "Personality trait where people behave opposite behind steering wheel than in everyday life" },
            { term: "Repression", definition: "Personality trait where people don't perceive dangerous situations as risky" },
            { term: "Self-assertion", definition: "Personality trait where people get angry and react dangerously when others make mistakes" },
            { term: "Selective perception", definition: "Process by which brain selects most important impressions to pay attention to" },
            { term: "Surface learning", definition: "Learning method where you only memorize facts to pass tests" },

            // Physical & Mechanical Phenomena
            { term: "Kinetic energy", definition: "Energy that all moving objects possess, affected by weight and speed" },
            { term: "Over steering", definition: "When car turns more than wanted, can result in rear-end skidding" },
            { term: "Understeering", definition: "When car turns less than wanted and strives to go straight in curves" },
            { term: "Side force", definition: "Lateral force produced by vehicle tyre when cornering" },
            { term: "Speed blindness", definition: "Phenomenon where you think you're driving slower than you actually are" },
            { term: "Tunnel vision", definition: "Phenomenon at high speeds that makes field of observation narrower" },
            { term: "Peripheral vision", definition: "Largest part (98-99%) of field of view, primarily detects movement" },

            // Time & Distance Measurements
            { term: "Reaction time", definition: "Time it takes before you apply brakes after something unexpected happens" },
            { term: "Reaction distance", definition: "Distance car travels from discovering hazard until applying brakes" },
            { term: "Stopping distance", definition: "Total distance from discovering hazard until car comes to complete stop" },
            { term: "The three-second rule", definition: "Rule of thumb to maintain safe distance - should take three seconds to reach point where vehicle ahead was" },

            // Special Areas & Zones
            { term: "Pedestrian zone", definition: "Place where all vehicle traffic must be adapted to pedestrians with special rules" },
            { term: "Residential area", definition: "Place where vehicles must not exceed walking speed and give way to pedestrians" },
            { term: "Densely built-up area", definition: "Urban areas with many buildings, typically with lower speed limits" },
            { term: "Basic speed limits", definition: "Speed limits that apply when no other limit is specified: 50 km/h in built-up areas, 70 km/h outside" },

            // Special Procedures & Equipment
            { term: "Readiness for braking", definition: "When you place foot above brake pedal and are prepared to brake at any time" },
            { term: "Readiness for action", definition: "When you are prepared and ready to manoeuvre or brake at any time" },
            { term: "Warning triangle", definition: "Red triangle that should be put out behind car during emergency stop" },
            { term: "School crossing patrol", definition: "Operation where voluntary students help children safely across road" },
            { term: "School transport vehicle", definition: "Vehicle intended for transport to/from school for children with difficult journey" },
            { term: "Power steering", definition: "Help system that makes it easier to turn the steering wheel" },
            { term: "Shock absorbers", definition: "Device that contributes to better road holding by minimizing rocking movements" },
            { term: "Wheel balancing", definition: "When wheels are adjusted so they can rotate without vibrating at certain speeds" },
            { term: "Wheel alignment", definition: "Corrective alteration where wheels' angles are adjusted to be perpendicular and parallel" },

            // Traffic Rules & Principles
            { term: "The bus rule", definition: "Give way rule requiring you to slow down when bus indicates intention to move off bus stop" },
            { term: "The exit rule", definition: "Give way rule that applies before priority to right rule when exiting parking lots" },
            { term: "The priority to the right rules", definition: "Right-of-way system requiring drivers to give way to vehicles approaching from right" },
            { term: "The zipper merge", definition: "Principle when two lanes merge - one vehicle from each lane alternately" },
            { term: "The blind spot", definition: "Area not covered by any mirror, checked by glancing over shoulder" },
            { term: "Vision Zero", definition: "Road safety initiative that no one shall be killed or seriously injured in traffic" },

            // Vehicle Classifications
            { term: "Light truck", definition: "Truck with total weight of no more than 3,500 kg, primarily for freight transport" },
            { term: "Slow-moving vehicle", definition: "Vehicle designed for maximum speed of 30, 40 or 45 km/h with orange-red triangular sign" },
            { term: "Moped class 1", definition: "Two-wheeled motor-driven vehicle designed for maximum speed of 45 km/h" },
            { term: "Moped class 2", definition: "Two-wheeled motor-driven vehicle designed for maximum speed of 25 km/h" },

            // Crossing Types
            { term: "Supervised pedestrian crossing", definition: "Pedestrian crossing where duty to give way is regulated by traffic signals" },
            { term: "Unsupervised pedestrian crossing", definition: "Pedestrian crossing not equipped with traffic signals where drivers must give way" },

            // Fuel & Environment
            { term: "Biofuel", definition: "Renewable fuels produced by living organisms, unlike fossil fuels taking millions of years to form" },
            { term: "Carbon footprint", definition: "Amount of carbon dioxide emissions produced by your driving" },
            { term: "Sustainable transport", definition: "Transportation methods with minimal environmental impact" },
            { term: "Alternative transport", definition: "Other ways to travel besides private cars" },
            { term: "Environmental impact", definition: "How driving affects air quality, noise, and climate change" },
            { term: "Eco-friendly driving", definition: "Driving methods that reduce fuel consumption and emissions" },

            { term: "Vulnerable road users", definition: "Road users who are at higher risk of injury such as pedestrians, cyclists, children, elderly, and disabled individuals" },
            { term: "Margin of safety", definition: "The safe distance you maintain between your vehicle and other road users or obstacles to prevent accidents" },
            { term: "Veer", definition: "To change direction suddenly or swerve, especially when a vehicle moves unexpectedly toward another lane or area" },
            { term: "Right of way", definition: "The legal right of a vehicle or pedestrian to proceed in a particular direction before others in traffic situations" },
            { term: "Obligation to give way", definition: "The legal requirement to allow other road users to pass or proceed before you in certain traffic situations" },
            { term: "Pedestrian crossing", definition: "A designated area on the road where pedestrians have the right to cross, often marked with stripes or signs" },
            { term: "Ambiguous rules", definition: "Traffic regulations that are not clearly defined and require reasonable judgment to interpret and follow" },
            { term: "Judicial system", definition: "The court system that makes legal decisions about whether traffic rules have been properly followed" },
            { term: "Defensive driving", definition: "A driving technique that involves anticipating potential hazards and driving cautiously to prevent accidents" },
            { term: "Limited visibility", definition: "Road conditions where you cannot see clearly ahead due to curves, weather, or obstacles" },
            { term: "Risk training", definition: "Mandatory education about dangerous driving behaviors including alcohol, drugs, fatigue, and high-risk situations" },
            { term: "Skid pan", definition: "A specially designed wet surface used in driver training to practice controlling a vehicle when it loses traction" },
            { term: "Theory test with support", definition: "Special accommodations for the driving test including extended time, oral support, or interpreter services for people with learning difficulties" },
            { term: "Road markings", definition: "Painted lines, symbols, and signs on the road surface that provide guidance and regulation for drivers" },
            { term: "Developing hazards", definition: "Potential dangers on the road that are starting to occur and may require immediate driver action" },
            { term: "Stop or park", definition: "The act of bringing your vehicle to a complete halt temporarily (stop) or leaving it stationary for a period (park)" },
            { term: "Consideration and care", definition: "The fundamental principle of being thoughtful and cautious toward other road users and people living near roads" },
            { term: "Appropriate speed", definition: "Driving at a speed that is safe for current road, weather, and traffic conditions, which may be lower than the speed limit" },

            // Traffic Safety & Rules
            { term: "Vulnerable road users", definition: "Road users who are at higher risk of injury such as pedestrians, cyclists, children, elderly, and disabled individuals" },
            { term: "Right of way", definition: "The legal right of a vehicle or pedestrian to proceed in a particular direction before others in traffic situations" },
            { term: "Obligation to give way", definition: "The legal requirement to allow other road users to pass or proceed before you in certain traffic situations" },
            { term: "Yielding", definition: "Allowing other vehicles or pedestrians to go first when they have priority in traffic" },
            { term: "Priority rules", definition: "Traffic regulations that determine which road user has the right to proceed first in various situations" },
            { term: "Consideration and care", definition: "The fundamental principle of being thoughtful and cautious toward other road users and people living near roads" },

            // Driving Techniques & Safety
            { term: "Defensive driving", definition: "A driving technique that involves anticipating potential hazards and driving cautiously to prevent accidents" },
            { term: "Margin of safety", definition: "The safe distance you maintain between your vehicle and other road users or obstacles to prevent accidents" },
            { term: "Following distance", definition: "The space maintained between your vehicle and the vehicle in front of you while driving" },
            { term: "Stopping distance", definition: "The total distance needed to bring a vehicle to a complete stop, including thinking and braking distance" },
            { term: "Thinking distance", definition: "The distance a vehicle travels during the time it takes for the driver to react to a hazard" },
            { term: "Braking distance", definition: "The distance a vehicle travels from when the brakes are applied until it comes to a complete stop" },
            { term: "Skidding", definition: "When a vehicle loses traction and slides uncontrollably, usually due to wet or icy road conditions" },
            { term: "Aquaplaning/Hydroplaning", definition: "When a vehicle's tires lose contact with the road surface due to water, causing loss of control" },

            // Road Conditions & Environment
            { term: "Limited visibility", definition: "Road conditions where you cannot see clearly ahead due to curves, weather, or obstacles" },
            { term: "Blind spot", definition: "Areas around a vehicle that cannot be seen directly or through mirrors while driving" },
            { term: "Carriageway", definition: "The part of the road intended for vehicle traffic, excluding shoulders and sidewalks" },
            { term: "Junction", definition: "A place where two or more roads meet or intersect" },
            { term: "Roundabout", definition: "A circular intersection where traffic flows in one direction around a central island" },
            { term: "Contraflow", definition: "Traffic moving in the opposite direction to the normal flow on a road" },
            { term: "Hard shoulder", definition: "The emergency lane on the side of a highway for stopping in case of breakdown or emergency" },

            // Vehicle Operations
            { term: "Overtaking", definition: "Passing another vehicle by moving into an adjacent lane and then back" },
            { term: "Undertaking", definition: "Illegally passing a vehicle on the left side (in right-hand traffic countries)" },
            { term: "Veer", definition: "To change direction suddenly or swerve, especially when a vehicle moves unexpectedly toward another lane" },
            { term: "Manoeuvre", definition: "A planned movement or series of moves requiring skill, such as parking or turning" },
            { term: "Reversing", definition: "Driving a vehicle backward" },
            { term: "Three-point turn", definition: "A method of turning a vehicle around in a narrow space using forward and reverse movements" },

            // Traffic Signs & Markings
            { term: "Regulatory signs", definition: "Traffic signs that inform drivers of traffic laws and regulations that must be obeyed" },
            { term: "Warning signs", definition: "Traffic signs that alert drivers to potential hazards or changes in road conditions ahead" },
            { term: "Information signs", definition: "Traffic signs that provide helpful information about routes, distances, and services" },
            { term: "Road markings", definition: "Painted lines, symbols, and signs on the road surface that provide guidance and regulation for drivers" },
            { term: "Chevrons", definition: "V-shaped road markings used to indicate safe following distances or lane directions" },
            { term: "Cat's eyes", definition: "Reflective road studs embedded in the road surface to improve visibility at night" },

            // Pedestrian Areas & Crossings
            { term: "Pedestrian crossing", definition: "A designated area on the road where pedestrians have the right to cross, often marked with stripes" },
            { term: "Zebra crossing", definition: "A type of pedestrian crossing marked with black and white stripes" },
            { term: "Pelican crossing", definition: "A pedestrian crossing controlled by traffic lights that pedestrians can activate" },
            { term: "School crossing", definition: "A designated area near schools where children cross the road, often with special safety measures" },
            { term: "Footpath/Pavement", definition: "The raised area beside a road designed for pedestrians to walk on" },

            // Weather & Conditions
            { term: "Adverse weather", definition: "Dangerous weather conditions such as heavy rain, snow, fog, or ice that affect driving safety" },
            { term: "Black ice", definition: "A thin, nearly invisible layer of ice on the road surface that is extremely dangerous for driving" },
            { term: "Fog", definition: "Thick cloud at ground level that severely reduces visibility while driving" },
            { term: "Glare", definition: "Bright light that makes it difficult to see, often from sun or vehicle headlights" },

            // Legal & Administrative
            { term: "Risk training", definition: "Mandatory education about dangerous driving behaviors including alcohol, drugs, fatigue, and risks" },
            { term: "Provisional license", definition: "A temporary driving permit with restrictions, issued before obtaining a full license" },
            { term: "Disqualification", definition: "The legal removal of someone's right to drive for a specified period due to serious violations" },
            { term: "Endorsement", definition: "Penalty points added to a driving record for traffic violations" },

            // Speed & Limits
            { term: "Speed limit", definition: "The maximum legal speed allowed on a particular section of road" },
            { term: "Appropriate speed", definition: "Driving at a speed safe for current conditions, which may be lower than the speed limit" },
            { term: "Built-up area", definition: "Urban areas with buildings where lower speed limits typically apply" },
            { term: "Dual carriageway", definition: "A road with two separate carriageways for traffic moving in opposite directions" },
            { term: "Motorway", definition: "A high-speed road designed for fast-moving traffic with multiple lanes and controlled access" },

            // Emergency Situations
            { term: "Emergency services", definition: "Police, ambulance, fire brigade, and other services that respond to emergencies" },
            { term: "Hazard warning lights", definition: "Flashing lights used to warn other drivers of a broken-down or slow-moving vehicle" },
            { term: "Emergency stop", definition: "Bringing a vehicle to an immediate halt due to a sudden hazard or danger" },
            { term: "Breakdown", definition: "When a vehicle stops working and cannot continue driving" },
            { term: "Recovery vehicle", definition: "A truck equipped to tow or transport broken-down vehicles" },

            // Advanced Concepts
            { term: "Anticipation", definition: "The ability to predict and prepare for potential hazards or traffic situations ahead" },
            { term: "Observation", definition: "The continuous process of watching and assessing the road environment while driving" },
            { term: "Spatial awareness", definition: "Understanding the position and movement of your vehicle in relation to other objects" },
            { term: "Hazard perception", definition: "The ability to identify potential dangers on the road and respond appropriately" },
            { term: "Progressive acceleration", definition: "Gradually increasing speed smoothly rather than sudden acceleration" },
            { term: "Engine braking", definition: "Slowing down by reducing throttle and using engine compression rather than wheel brakes" },
            { term: "Cadence braking", definition: "A technique of applying and releasing brakes repeatedly to maintain steering control on slippery surfaces" },

            // Environmental & Eco-driving
            { term: "Eco-driving", definition: "Driving techniques that reduce fuel consumption and environmental impact" },
            { term: "Emissions", definition: "Pollutants released from a vehicle's exhaust system" },
            { term: "Fuel efficiency", definition: "How effectively a vehicle uses fuel, often measured in kilometers per liter" },
            { term: "Carbon footprint", definition: "The amount of carbon dioxide emissions produced by driving activities" },

            // Vehicle Components
            { term: "Anti-lock braking system (ABS)", definition: "A safety system that prevents wheels from locking up during braking" },
            { term: "Electronic stability control (ESC)", definition: "A system that helps maintain vehicle control during extreme steering maneuvers" },
            { term: "Traction control", definition: "A system that prevents wheel spin during acceleration on slippery surfaces" },
            { term: "Cruise control", definition: "A system that automatically maintains a constant vehicle speed without using the accelerator" },
            { term: "Power steering", definition: "A system that reduces the effort needed to steer a vehicle" },
        ]
    };