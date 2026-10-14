// Shared services data + helpers used by the homepage.
// Loaded via <script type="text/babel" src="shared-data.jsx"> BEFORE direction-c.jsx.

const LMS_SERVICES = [
  { id:'landscaping', n:'01', name:'Landscaping', group:'exterior', tags:['Year-round','Design + maintain'],
    blurb:'Designed and maintained landscapes that lift first impressions — mowing, edging, mulching, planting, hardscape.',
    img:'img/concrete-cracks.jpg', alt:'Landscaped frontage of an apartment building' },
  { id:'power-washing', n:'02', name:'Power Washing', group:'exterior', tags:['Hot 210°F','60–4000 psi'],
    blurb:'Hot and cold pressure washing meeting Denver Water Board standards. Façades, sidewalks, drive-thrus.',
    img:'img/power-washing.jpg', alt:'Crew on a lift washing a brick building façade' },
  { id:'snow-removal', n:'03', name:'Snow Removal', group:'lot', tags:['24/7 storm response','Plow + de-ice'],
    blurb:'Plow trucks, ATVs, skid steers, dump trucks. Plowing, hauling, deicing on lots, sidewalks, and drives.',
    img:'img/asphalt-crack.jpg', alt:'Plow clearing snow from a parking lot' },
  { id:'litter-pick-up', n:'04', name:'Litter Pick-Up', group:'exterior', tags:['Day or night','Porter service'],
    blurb:'Day-and-night porter service. Janitorial, trash sweeps, and policing flexible to any retail or office cadence.',
    img:'img/litter.jpg', alt:'Discarded can in the grass' },
  { id:'asphalt-work', n:'05', name:'Asphalt Work', group:'lot', tags:['Repair','Seal coat','Overlay'],
    blurb:'Removal & replacement, crack sealing, patching, seal coating, infrared repair, and overlays — 24/7.',
    img:'img/asphalt-roller.jpg', alt:'Roller compacting fresh asphalt' },
  { id:'concrete-flatwork', n:'06', name:'Concrete Flatwork', group:'lot', tags:['Driveways','Sidewalks','Repair'],
    blurb:'Driveways, sidewalks, structural repairs. Crack injection, partial-depth, full-depth — minimal downtime.',
    img:'img/concrete.jpg', alt:'Screeding a fresh concrete slab' },
  { id:'handy-man-projects', n:'07', name:'Handyman Projects', group:'specialty', tags:['Electrical','Plumbing','Remodel'],
    blurb:'Service professionals for any project — electrical, plumbing, light remodel. No project too big or small.',
    img:'img/handyman.jpg', alt:'Tool belt with hand tools and a drill' },
  { id:'lot-striping', n:'08', name:'Lot Striping', group:'lot', tags:['ADA compliant','Fresh stripes'],
    blurb:'Re-striping, traffic flow design, ADA-compliant layouts. First impressions start in the lot.',
    img:'img/lot-striping.jpg', alt:'Fresh yellow striping on a parking lot' },
  { id:'painting-services', n:'09', name:'Painting Services', group:'specialty', tags:['Interior','Exterior'],
    blurb:'Prep, repaint, pattern finishes on wood and metal — quality finish for any size project.',
    img:'img/painting.jpg', alt:'Painter rolling a wall' },
  { id:'sweeping', n:'10', name:'Sweeping', group:'exterior', tags:['Street','Lot','Garage'],
    blurb:'Broom and air-vacuum sweepers for highways, lots, multi-level garages, and warehouse scrubbing.',
    img:'img/sweeping.jpg', alt:'Sweeper brushes on pavement' },
  { id:'sand-blasting', n:'11', name:'Sand Blasting', group:'specialty', tags:['Pressure pot','Multi-media'],
    blurb:'Pressure-pot and gravity sandblasting — sand, coal slag, glass beads, walnut shells, steel shot.',
    img:'img/sandblasting.jpg', alt:'Worker sandblasting a wall' },
  { id:'graffiti-removal', n:'12', name:'Graffiti Removal', group:'specialty', tags:['Same-day','Before/after'],
    blurb:'Same-day removal on brick, block, concrete, painted surfaces. Restored before customers see it.',
    img:'img/graffiti-removal.jpg', alt:'Technician removing graffiti from a stone wall' },
];

const LMS_GROUP_LABELS = {
  exterior: 'Exterior Maintenance',
  lot: 'Lot & Pavement',
  specialty: 'Specialty Services',
};

const LMS_INFO = {
  phone: '303-573-7677',
  phoneDisplay: '303 · 573 · 7677',
  phoneTel: 'tel:+13035737677',
  email: 'localmotionone@msn.com',
  // Web3Forms access key (public by design). Empty = fall back to a mailto: link.
  formKey: '',
  addr1: '9745 E Hampden Ave, Suite 402',
  addr2: 'Denver, CO 80231',
};

// Brand palette derived from the existing Local Motion Services logo
// (red swoosh, royal-blue wordmark, black arrows, green grass).
const LMS_BRAND = {
  blue:    '#1F3FA8',  // wordmark royal blue
  blueDk:  '#15307F',  // hover / depth
  blueLt:  '#E8EDFA',  // tint surface
  red:     '#E71D24',  // logo red swoosh
  redDk:   '#B81118',
  redLt:   '#FCE7E8',
  green:   '#3E8C2A',  // grass accent
  greenDk: '#2C6A1E',
  ink:     '#0E1726',  // arrow black, deep neutral
  inkSoft: '#1B2638',
  paper:   '#F6F4EE',  // warm off-white
  paper2:  '#ECE9DF',
  cream:   '#FAF8F2',
  hair:    'rgba(14,23,38,0.12)',
  mute:    '#5A6478',
};

const LMS_LOGO_SRC = 'img/lms-logo.png';

Object.assign(window, { LMS_SERVICES, LMS_GROUP_LABELS, LMS_INFO, LMS_BRAND, LMS_LOGO_SRC });
