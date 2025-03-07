import React from "react";

function Win({ count }) {
  return (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {count} guesses</strong>.
      </p>
    </div>
  );
}

export default Win;
