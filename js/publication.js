/** Public quiz gate: only explicitly approved ORIGINAL prototype exercises may be shown.
 * These approvals permit prototype display; they do NOT assert final scientific certification.
 * A research row marked no-explicit-HOLD is NOT an approval.
 */
export const ORIGINAL_PROTOTYPE_APPROVAL="approved-original-prototype-v1";
const rejectedResearchKeys=["publication_hold","publication_state","final_publication_approval","choice_id","question_id","mapping_status","review_priority","fact_verification_status","original_explanation_draft"];
export function isApprovedOriginalPrototypeExercise(q){
  if(q===null||typeof q!=="object"||Array.isArray(q))return false;
  if(q.source_type!=="original"||q.publication_approval!==ORIGINAL_PROTOTYPE_APPROVAL)return false;
  if(typeof q.id!=="string"||!/^(?:intro|g\d{2}|a\d{2})-\d{3}$/.test(q.id))return false;
  if(rejectedResearchKeys.some(key=>Object.prototype.hasOwnProperty.call(q,key)))return false;
  return typeof q.question==="string"&&q.question.length>0&&typeof q.explanation==="string"&&q.explanation.length>0&&Array.isArray(q.choices)&&q.choices.length===5&&Number.isInteger(q.answer)&&q.answer>=0&&q.answer<5;
}
export function selectPublicPrototypeExercises(rows){
  if(!Array.isArray(rows))throw new TypeError("Question data must be an array");
  return rows.filter(isApprovedOriginalPrototypeExercise);
}
