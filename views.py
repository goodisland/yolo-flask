from model.detect import pipeline_model
from sys import path
from flask import render_template, request
from flask import redirect, url_for
import os
from PIL import Image

UPLOAD_FOLDER = 'static/uploads/'

def base():
    return render_template("base.html")


def index():
    if request.method == 'POST':
        f = request.files['upload_file']
        path = os.path.join(UPLOAD_FOLDER, f.filename)
        f.save(path)
        print('Flie saved sucessfully in \n', path)
        # prediction (pass to pipeline model)
        pipeline_model(path)
        
        return render_template('index.html', fileupload=True, img_name=f.filename)

    return render_template('index.html', fileupload=False)


