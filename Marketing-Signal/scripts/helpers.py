def p(*paras):
    return "\n".join(f"<p>{t}</p>" for t in paras)

def ul(items):
    return "<ul>" + "".join(f"<li>{i}</li>" for i in items) + "</ul>"

def q(qid, question, options, correct, explanation):
    return {"id": qid, "question": question, "options": options, "correctIndex": correct, "explanation": explanation}
