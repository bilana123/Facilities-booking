<!DOCTYPE html>
<html>

  <title>Register Form</title>
  @include('common.css')

<body>
<section class="contact_section layout_padding">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-lg-6 offset-md-1 offset-lg-2">
          <div class="form_container">
            <div class="heading_container">
              <h2>
                Registeration form
                
   
              </h2>
            </div>
            <form method="POST" action="/register_new_user">
            @csrf 
              <div>
              <label for="full name">full name:<span class=""text-danger>*</label>
                <input type="text" id="full name"  name="fullname"placeholder="Full Name " />

              </div>
              <div>
              <label for="email">email:</label>
                <input type="email"  name="email"  placeholder="Email" />
              </div>
              <div>
              <label for="contact no">contact_no:</label>
                <input type="text"  name="contactno" placeholder="Password" />
              </div>
              <div>
              <label for="Password">Password:</label>
                <input type="text"  name="password" placeholder="Password" />
              </div>
              <div>
              <div className="dropdown">
      <label for="role">Role:</label>
      
      <select name="role" id="role">
         <option value="">Select role </option>
         @foreach ($response_data as $data)
            <option value="{{ $data->id }}">{{ $data->name}} </option>
          @endforeach
  </select>
              </div>
              <div class="d-flex ">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  </section>
  
    </form>
  </div>
</body>
</html>
