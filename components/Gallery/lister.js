import Image from "next/image";

export default function Story({ story, action, images }) {
  return (
    <div>
      <div
        style="
border-left:1px solid rgba(200,200,200,0.6);
border-right:1px solid rgba(200,200,200,0.6);
		      background:rgba(10,10,10,0.2);padding:5px;border-radius:0px 0px 0px 0px;
		      position:sticky;
		      left:0px;
		      top:0px;
		      text-align:center;
		      "
      >
        {`$${story.price} ${story.status}`}
      </div>
      <div style="display:flex;max-width:100%;overflow-x:auto;">
        {story.items.length == 0 && (
          <div style="border:1px solid rgba(200,200,200,0.6);padding:5px;">
            {"VERIFICAR HISTORIAS"}
          </div>
        )}
        {images.map((image, index) => (
          <div key={index} style="border:1px solid rgba(200,200,200,0.6);">
            <div
              style={`display:flex;padding:3px;
font-size:80%;
background:rgba(0,60,160,0.2)
			    `}
            >
              <div> 📸 </div>
            </div>
            <div style="display:flex;">
              <div
                key={index}
                style="
 box-shadow: inset 0 0 0 0.2em rgba(100,100,100,0.2);
			background-image:url('footerCorona.png');
 background-position: center;
  background-repeat: no-repeat;
			background-size: 50px auto;
			overflow:hidden;
                          min-width:max-content;border:solid -2px rgba(200,200,200,0.1);"
              >
                <Image
                  onClick={(e) => action(e, image)}
                  alt="product"
                  quality={50}
                  height={120}
                  width={90}
                  priority={true}
                  src={image}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
